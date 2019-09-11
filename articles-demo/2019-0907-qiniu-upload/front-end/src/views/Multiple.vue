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
import qs from 'qs';

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
      // const list = encodeURIComponent(JSON.stringify(this.keyList));
      await this.$http.get('/qiniu/token/list', {
        params: {
          list: this.keyList,
        },
        paramsSerializer(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
      }).then((res) => {
        const resultList = res.data.tokenList;
        resultList.forEach((item, index) => {
          console.log(res.data.keyList[index]);
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
      this.$refs.upload.value = null;
    },
    postToQiniu(data) {
      const that = this;
      const formData = new FormData();
      formData.append('file', data.file);
      formData.append('key', data.key);
      formData.append('token', data.token);
      axios({
        method: 'POST',
        url: this.postURL,
        data: formData,
      })
        .then((res) => {
          const fileLink = `${that.baseURL}${res.data.key}`;
          this.$Notice.success({
            title: '上传成功！',
            desc: fileLink,
          });
        })
        .catch((err) => {
          console.log(err);
          this.$Notice.error({
            title: '上传失败！',
            desc: data.key,
          });
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
