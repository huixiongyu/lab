const Router = require('koa-router')
const path = require('path')
const qiniuRouter = new Router({ prefix: '/api/qiniu' })
const { getQiniuToken, getQiniuTokenWithName} = require('../utils/qiniu')
const { yearMonthDay } = require('../utils/dateFormate')

qiniuRouter.post('/without', async(ctx, next) => {
    const resultList = []
    const fileList = ctx.request.files.file 
    if(fileList.length > 1) {  // file有一个length属性可以返回列表中的文件数量
        Array.from(fileList).forEach(file => {  // FileList并不是可迭代对象，但是可以通过Array.from转换，也可以用item()方法
            const basename = path.basename(file.path)
            const url = `${ctx.origin}/uploads/${yearMonthDay()}/${basename}` // ctx.origin是域名端口信息，比如http://localhost:5000
            resultList.push(url)
        })     
    }else {
        const basename = path.basename(fileList.path)
        const url = `${ctx.origin}/uploads/${yearMonthDay()}/${basename}`
        resultList.push(url)                  
    }
    ctx.body = { url: resultList }  
})

qiniuRouter.post('/directly', async(ctx, next) => {
    const file = ctx.request.files.file
    const basename = path.basename(file.path)
    const url = `${ctx.origin}/uploads/${yearMonthDay()}/${basename}`
    ctx.body = { url }
})

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

qiniuRouter.get('/token/list', async(ctx, next) => {
    let keyList = ctx.query.list
    const tokenList = []
    console.log(ctx.query.list)
    if(!(keyList instanceof Array)){
        keyList = []
        keyList.push(ctx.query.list)
    }
    keyList.forEach((item) => {
        tokenList.push(getQiniuTokenWithName(item))
    })  
    ctx.body = {
        tokenList,
        keyList
    }
})

qiniuRouter.get('/token/inlist', async(ctx, next) => {
    const decodeString = decodeURIComponent(ctx.query.list)
    const keyList = decodeString.split(',');
    const tokenList = []
    keyList.forEach((item) => {
        tokenList.push(getQiniuToken())
    })
    ctx.body = {
        tokenList,
        keyList
    }
})

module.exports = qiniuRouter