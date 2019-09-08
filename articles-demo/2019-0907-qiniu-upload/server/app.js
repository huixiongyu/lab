const Koa = require('koa')
const app = new Koa()
var cors = require('koa2-cors')
const routing = require('./routes')

app.use(cors())  // 解决跨域请求问题
// 打印请求日志
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method}${ctx.url}-${ms}ms`)
})

routing(app);

app.listen(5000, () => console.log('服务启动于5000端口...'))