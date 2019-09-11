## front-end

```
cd front-end
npm install
npm run serve
```



## server

server使用Koa编写，但是如果你不具备良好的编程能力不建议使用到生产环境，比如参数校验、全局捕获异常不好的话可能会导致程序暂停或者被恶意使用。建议使用[Lin-cms-koa](<https://github.com/TaleLin/lin-cms-koa>) 、[egg.js](<https://eggjs.org/>) 和 [nestjs](https://nestjs.com)

示例只是实现基本的上传能力，开发建议使用eslint规范自己的代码，还有充分运用模块化、面向对象的方式编程。

克隆以后请在config下面设置自己的七牛密钥

运行：

```
cd server
npm install
npm run serve
```

