## front-end

```
cd front-end
npm install
npm run serve
```

运行的时候记得修改baseURL和postURL

baseURL是你绑定的域名地址，一般二级域名，备案、https、更改CNAME等操作请自行谷歌，很简单，只是有点费时间。

postURL对应着后端配置中bucket的[存储区域](https://developer.qiniu.com/kodo/manual/1671/region-endpoint)

你可能需要的访问地址：

* [前端直传](https://github.com/huixiongyu/lab/blob/master/articles-demo/2019-0907-qiniu-upload/front-end/src/views/Home.vue)
* [自定义文件名](<https://github.com/huixiongyu/lab/blob/master/articles-demo/2019-0907-qiniu-upload/front-end/src/views/WithName.vue>)
* [手动上传](<https://github.com/huixiongyu/lab/blob/master/articles-demo/2019-0907-qiniu-upload/front-end/src/views/Manual.vue>)
* [自定义多张图片上传](<https://github.com/huixiongyu/lab/blob/master/articles-demo/2019-0907-qiniu-upload/front-end/src/views/Multiple.vue>)
* [预览+上传到服务器](<https://github.com/huixiongyu/lab/blob/master/articles-demo/2019-0907-qiniu-upload/front-end/src/views/ServerUpload.vue>) 

## server

server使用Koa编写，但是如果你不具备良好的编程能力不建议使用到生产环境，比如参数校验、全局捕获异常不好的话可能会导致程序暂停或者被恶意使用。建议使用[Lin-cms-koa](<https://github.com/TaleLin/lin-cms-koa>) 、[egg.js](<https://eggjs.org/>) 和 [nestjs](https://nestjs.com)

示例只是实现基本的上传能力，开发建议使用eslint规范自己的代码，还有充分运用模块化、面向对象的方式编程。

注意！！！

**克隆以后请在config下面设置自己的七牛密钥、bucket，不然肯定无法生成token**

运行：

```
cd server
npm install
npm run serve
```

## 小程序

小程序主要使用的API

* wx.request
* wx.chooseImage
* wx.uploadFile
* wx.cloud.uploadFile

使用的时候需要自己已经开通云开发

本地调试可以不用配置http连接，在设置->项目设置把不校验合法域名勾选

index页面里的“发布”按钮绑定了上传方法，qiniuUpload是七牛上传，upload是云存储上传。

请在config下面修改对应的配置：加速域名和上传区域域名。