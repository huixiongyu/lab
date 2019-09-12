<template>
    <div class="server-upload">
      <div class="upload-box">
        <div class="demo-upload-list" v-for="(item, index) in imageList" :key="item">
          <img :src="item">
          <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
              <Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
          </div>
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png', 'gif']"
            :max-size="4096"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            :action="postURL"
            style="display: inline-block;width:180px;">
            <div style="width: 180px;height:180px;line-height: 180px;">
                <Icon type="ios-camera" size="20"></Icon>
            </div>
        </Upload>
        <div class="upload-submit-btn">
          <Button type="success" @click="confirmUpload">确认上传</Button>
        </div>
      </div>
      <Modal title="查看图片" v-model="visible">
          <img :src="imgURL" v-if="visible" style="width: 100%">
      </Modal>
    </div>
</template>
<script>


export default {
  name: 'server',
  data() {
    return {
      postURL: 'http://localhost:5000/api/qiniu/directly',
      imgBaseURL: 'http://localhost:5000/uploads/',
      uploadList: [],
      imageList: [],
      visible: false,
      imgURL: '',
    };
  },
  methods: {
    handleBeforeUpload(file) {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: '上传的文件不得超过5张.',
        });
        return false;
      }
      let exist = false;
      this.uploadList.forEach((item) => {
        if (item.name === file.name) {
          exist = true;
        }
      });
      if (exist) {
        this.$Notice.error({
          title: '文件重复了！',
        });
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.imageList.push(reader.result);
      };
      this.uploadList.push(file);
      return false;
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: '文件大小限制',
        desc: `文件${file.name}太大了，单个文件不允许超过4M`,
      });
    },
    handleView(url) {
      this.imgURL = url;
      this.visible = true;
    },
    handleRemove(index) {
      this.uploadList.splice(index, 1);
      this.imageList.splice(index, 1);
      this.$Notice.info({
        title: '移除一张图片',
      });
    },
    confirmUpload() {
      if (this.uploadList.length === 0) {
        this.$Notice.error({
          title: '还没有可上传的文件！',
        });
        return;
      }
      this.uploadList.forEach((file) => {
        this.$refs.upload.post(file);
      });
      this.$Notice.success({
        title: '上传成功！',
      });
      this.imageList.splice(0, this.imageList.length);
      this.uploadList.splice(0, this.uploadList.length);
    },
    handleSuccess(res) {
      console.log(res.url);
    },
  },
};
</script>
<style lang="less" scoped>
  .server-upload{
    width: 100vw;
    height: 400px;
    display: flex;
    justify-content: center;
  }
  .upload-box{
    position: relative;
    width: 600px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .demo-upload-list{
    display: inline-block;
    width: 180px;
    height: 180px;
    text-align: center;
    line-height: 180px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
  .upload-submit-btn{
    position: absolute;
    bottom: -50px;
    right: 50px;
  }
</style>
