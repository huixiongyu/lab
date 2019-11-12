<template>
  <div class="home">
    <div class="outer">
        <div class="cover">
            </div>
        <div class="login">
        <div class="logo-container">
            <img src="../assets/logo@1.png" alt="logo">
        </div>
        <div class="system-title">
            <div><span>冬奥气候预测子系统</span></div>
        </div>
        <div class="login-form">
            <div class="login-form-input">
            <el-input placeholder="请输入账号" v-model="account" style="margin-bottom: 10px;">
                <template slot="prepend">账号:</template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password">
                <template slot="prepend">密码:</template>
            </el-input>
            </div>
        </div>
        <div class="confirm-login">
            <div class="confirm-button">
            <el-button type="warning" style="width: 100%">登录</el-button>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      account: '',
      password: '',
    };
  },
  mounted() {
    console.log('center');
  },
};
</script>
<style lang="scss" scoped>
  .home{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .outer{
    width: 900px;
    height: 540px;
    display: flex;
    border: 1px solid #333;
  }
  .cover{
    width: 50%;
    height: 100%;
    background: url('../assets/background.png') no-repeat;
    background-position: left 25% top 50%;
    background-size:cover;
  }
  .login{
    width: 50%;
    height: 100%;
  }
  .logo-container{
    height: 146px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      display: block;
    }
  }
  .system-title{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
  }
  .login-form{
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form-input{
      width: 320px;
    }
  }
  .confirm-login{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .confirm-button{
      width: 320px;
    }
  }
</style>
