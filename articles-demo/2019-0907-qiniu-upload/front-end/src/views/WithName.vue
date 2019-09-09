<template>
  <div class="about">
    <Upload
      ref="upload"
      multiple
      type="drag"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
      :format="['jpg', 'jpeg', 'png']"
      :max-size="4096"
      :data="{token: qiniuToken, key: keyName}"
      :action="postURL">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或者拖拽文件到此处上传</p>
      </div>
    </Upload>
  </div>
</template>
<script>

export default {
  name: 'post-name',
  data() {
    return {
      postURL: 'http://upload-z2.qiniup.com',
      qiniuToken: '',
      keyName: 'dingxiangjie.jpg',
    };
  },
  methods: {
    // 默认用文件名作为上传的key值
    // async handleBeforeUpload() {
    //   await this.$http.get('/qiniu/token/name', {
    //     params: {
    //       name: 'dingxiangjie.jpg',
    //     },
    //   }).then((res) => {
    //     console.log(res.data.token);
    //     this.qiniuToken = res.data.token.trim();
    //   })
    //     .catch((err) => {
    //       this.$Notice.error({
    //         title: '错误',
    //         desc: err ? '' : '上传失败',
    //       });
    //     });
    //   console.log('我等到了...');
    // },
    // 修改文件的名字后上传，可以避免重复
    async handleBeforeUpload(file) {
      const timeStamp = new Date().getTime();
      const newfile = new File([file], `${timeStamp}.jpg`, { type: 'image/jpeg' });
      console.log(newfile);
      // await this.$http.get('/qiniu/token/name', {
      //   params: {
      //     name: 'dingxiangjie.jpg',
      //   },
      // }).then((res) => {
      //   console.log(res.data.token);
      //   this.qiniuToken = res.data.token.trim();
      // })
      //   .catch((err) => {
      //     this.$Notice.error({
      //       title: '错误',
      //       desc: err ? '' : '上传失败',
      //     });
      //   });
      // console.log('我等到了...');
    },
    handleSuccess(res) {
      console.log(res);
    },
  },
};
</script>
