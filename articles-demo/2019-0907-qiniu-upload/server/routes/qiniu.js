const Router = require('koa-router')
const qiniuRouter = new Router({ prefix: '/api/qiniu' })
const getQiniuToken = require('../utils/qiniu')

qiniuRouter.get('/token', async(ctx, next) => {
    const token = getQiniuToken()
    ctx.body = {
        token
    }
})


module.exports = qiniuRouter