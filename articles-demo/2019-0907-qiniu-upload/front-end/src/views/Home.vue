<template>
  <div class="home">
    <div class="directly-upload">
      <Upload
        ref="upload"
        multiple
        type="drag"
        :before-upload="handleBeforeUpload"
        :on-success="handleSuccess"
        :format="['jpg', 'jpeg', 'png']"
        :max-size="4096"
        :data="{token: qiniuToken}"
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
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      postURL: 'http://upload-z2.qiniup.com',
      qiniuToken: '',
    };
  },
  components: {
  },
  methods: {
    async handleBeforeUpload() {
      await this.$http.get('/qiniu/token').then((res) => {
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
    },
    handleSuccess(res) {
      console.log(res);
    },
  },
};
</script>
<style lang="less" scoped>
  .home{
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
