<template>
  <div class="form-data">
    <div class="directly-upload">
      <Upload
        ref="upload"
        multiple
        type="drag"
        :before-upload="handleBeforeUpload"
        :on-success="handleSuccess"
        :format="['jpg', 'jpeg', 'png', 'gif']"
        :max-size="4096"
        :data="{ token: qiniuToken, key: qiniuKey }"
        :action="postURL">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或者拖拽文件到此处上传</p>
        </div>
      </Upload>
      <Button type="success" style="float: right;" @click="handleUpload">确定上传</Button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'form-date',
  data() {
    return {
      postURL: 'http://upload-z2.qiniup.com',
      baseURL: 'http://qiniu.hackslog.cn/',
      qiniuToken: '',
      qiniuKey: '',
      perfix: 'blog',
      keyList: [], // 存放上传的名字
      imageList: [], // 存放上传信息，
      uploadFile: [],
    };
  },
  methods: {
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
      // this.keyList.push(file.name);
      this.imageList.push(postItem);
      this.uploadFile.push(newFile);
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
          this.imageList[index].token = item;
        });
      })
        .catch(() => {
          this.$Notice.error({
            title: '错误',
            desc: '获取Token失败',
          });
        });
      console.log(this.imageList);
      this.imageList.forEach(async (item, index) => {
        this.qiniuToken = item.token;
        this.qiniuKey = item.key;
        await this.$nextTick(async () => {
          console.log(this.qiniuToken);
          console.log(this.uploadFile[index]);
          await this.$refs.upload.post(this.uploadFile[index]);
        });
      });
      // const queue = [];
      // this.imageList.forEach((item) => {
      //   queue.push(this.postToQiniu(item));
      // });
      // Promise.all(queue).then((values) => {
      //   this.$Notice.success({
      //     title: '上传成功！',
      //   });
      //   console.log(values);
      // }, (reason) => {
      //   this.$Notice.error({
      //     title: '上传失败！',
      //   });
      //   console.log(reason);
      // });
    },
    // 这个方法用FormData() + Post的方式来上传，但是一直是403报错，遂放弃调用了组件里的方法
    // postToQiniu(data) {
    //   const formData = new FormData();
    //   formData.append('file', data.file);
    //   formData.append('key', data.key);
    //   formData.append('token', data.token);
    //   return new Promise((resolve, reject) => {
    //     axios({
    //       method: 'post',
    //       url: this.postURL,
    //       data: formData,
    //     })
    //       .then((res) => {
    //         const fileLink = `${this.baseURL}${res.key}`;
    //         resolve(fileLink);
    //       })
    //       .catch(() => {
    //         const fileLink = `${this.baseURL}${data.key}`;
    //         reject(fileLink);
    //       });
    //   });
    // },
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
  .form-data{
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
