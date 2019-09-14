<template>
  <div class="with-name">
    <div class="directly-upload">
      <Upload
        ref="upload"
        multiple
        type="drag"
        :before-upload="handleBeforeUpload"
        :on-success="handleSuccess"
        :format="['jpg', 'jpeg', 'png', 'gif']"
        :max-size="4096"
        :data="{token: qiniuToken, key: keyName}"
        :action="postURL">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或者拖拽文件到此处上传</p>
        </div>
      </Upload>
    </div>
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
      perfix: 'blog',
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
      console.log(file);
      const suffixList = file.name.split('.');
      const baseName = suffixList[0];
      const suffix = suffixList[1];
      const fileType = file.type;
      const timeStamp = new Date().getTime();
      const newName = `${this.perfix}/${timeStamp}_${baseName}.${suffix}`;
      const newfile = new File([file], newName, { type: fileType });
      this.keyName = newName;
      console.log(newfile);
      await this.$http.get('/qiniu/token/name', {
        params: {
          name: newName,
        },
      }).then((res) => {
        console.log(res.data.token);
        this.qiniuToken = res.data.token.trim();
      })
        .catch((err) => {
          console.log(err);
          this.$Notice.error({
            title: '错误',
            desc: '上传失败',
          });
        });
      console.log('我等到了...');
    },
    handleSuccess(res) {
      console.log(res);
    },
  },
};
</script>
<style lang="less" scoped>
  .with-name{
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
