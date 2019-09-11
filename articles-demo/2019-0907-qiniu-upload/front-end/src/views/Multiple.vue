<template>
  <div class="multiple">
    <div class="directly-upload">
      <input
        ref="upload"
        @change="handleChange"
        type="file"
        name="file"
        accept="image/*"
        multiple>
      <Button type="success" style="float: right;" @click="handleUpload">确定上传</Button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'multiple',
  data() {
    return {
      postURL: 'http://upload-z2.qiniup.com',
      baseURL: 'http://qiniu.hackslog.cn/',
      perfix: 'blog',
      keyList: [], // 存放上传的名字
      imageList: [], // 存放上传信息
    };
  },
  methods: {
    handleChange(e) {
      const { files } = e.target;
      if (!files) {
        return;
      }
      Array.from(files).forEach((file) => {
        this.handleBeforeUpload(file);
      });
    },
    handleBeforeUpload(file) {
      const suffixList = file.name.split('.');
      const baseName = suffixList[0];
      const suffix = suffixList[1];
      const fileType = file.type;
      const timeStamp = new Date().getTime();
      const newName = `${this.perfix}/${timeStamp}_${baseName}.${suffix}`;
      const newFile = new File([file], newName, { type: fileType });
      const postItem = {
        file: newFile,
        key: newName,
        token: '',
      };
      this.keyList.push(newName);
      this.imageList.push(postItem);
      return false;
    },
    async handleUpload() {
      if (this.keyList.length === 0) {
        this.$Notice.warning({
          title: '当前没有可上传的文件！',
        });
        return;
      }
      const list = encodeURIComponent(JSON.stringify(this.keyList));
      await this.$http.get('/qiniu/token/list', {
        params: {
          list,
        },
      }).then((res) => {
        const resultList = res.data.tokenList;
        resultList.forEach((item, index) => {
          console.log(item, res.data.keyList[index]);
          this.imageList[index].token = item;
        });
      })
        .catch(() => {
          this.$Notice.error({
            title: '错误',
            desc: '获取Token失败',
          });
        });
      const queue = [];
      this.imageList.forEach((item) => {
        queue.push(this.postToQiniu(item));
      });
      Promise.all(queue).then((values) => {
        this.$refs.upload.value = null;
        this.$Notice.success({
          title: '上传成功！',
        });
        console.log(values);
      }, (reason) => {
        this.$Notice.error({
          title: '上传失败！',
        });
        console.log(reason);
      });
    },
    postToQiniu(data) {
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('key', data.key);
      formData.append('token', data.token);
      console.log(formData.get('file'));
      return new Promise((resolve, reject) => {
        console.log(this.postURL);
        const $axios = axios.create({ withCredentials: false });
        $axios({
          method: 'POST',
          url: this.postURL,
          data: formData,
        })
          .then((res) => {
            const fileLink = `${this.baseURL}${res.key}`;
            console.log(res);
            resolve(fileLink);
          })
          .catch((err) => {
            const fileLink = `${this.baseURL}${data.key}`;
            console.log(err);
            reject(fileLink);
          });
      });
    },
    handleSuccess(res) {
      console.log(res);
      this.$Notice.success({
        title: `文件${this.baseURL}${res.key}已经可以访问！`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
  .multiple{
    width: 100vw;
    height: 900px;
    display: flex;
    justify-content: center;
  }
  .directly-upload{
    width: 600px;
    height: 400px;
  }
</style>
