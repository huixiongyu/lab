const Router = require('koa-router')
const qiniuRouter = new Router({ prefix: '/api/qiniu' })
const { getQiniuToken, getQiniuTokenWithName} = require('../utils/qiniu')

qiniuRouter.get('/token', async(ctx, next) => {
    const token = getQiniuToken()
    ctx.body = {
        token
    }
})

qiniuRouter.get('/token/name', async(ctx, next) => {
    const fileName = ctx.query.name
    console.log(fileName)
    const token = getQiniuTokenWithName(fileName)
    ctx.body = {
        token
    }    
})

module.exports = qiniuRouter