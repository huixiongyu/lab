const Koa = require('koa')
const router = require('koa-router')
const app = new Koa()
const routing = require('./routes')

// 打印请求日志
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method}${ctx.url}-${ms}ms`)
})


routing(app);

app.listen(5000, () => console.log('服务启动于5000端口...'))