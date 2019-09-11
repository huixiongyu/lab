<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">前端直传</router-link> |
      <router-link to="/postname">自定义文件名</router-link> |
      <router-link to="/manual">手动上传</router-link> |
      <router-link to="/multiple">自定义多张图片文件名 + 预览</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
