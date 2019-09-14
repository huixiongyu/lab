const Koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const fs = require('fs')
const path = require('path')
const app = new Koa()
const cors = require('koa2-cors')
const routing = require('./routes')
const { yearMonthDay } = require('./utils/dateFormate')

app.use(cors())  // 解决跨域请求问题
// 打印请求日志
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method}${ctx.url}-${ms}ms`)
})
app.use(koaStatic(path.join(__dirname, 'public')))
app.use(koaBody({
    multipart: true, // 指的是multipart/form-data,支持文件上传
    formidable: {
      maxFieldsSize: 4 * 1024 * 1024, // 限制上传文件的体积
      uploadDir: path.join(__dirname, '/public/uploads'),  // 上传到的文件路径
      keepExtensions: true,  // 保留文件后缀
      onFileBegin(name, file){
        const originalFileName = file.name  // 获取上传文件的原名字
        const ext = path.extname(originalFileName)  // node自带的可以获取文件后缀名的方法，它是带.的
        const timeStamp = new Date().getTime()
        const randomNum = Math.floor(Math.random()*10000 + 1) 
        const fileName = `${timeStamp}${randomNum}${ext}` // 文件名是时间戳+10000以内的随机数，我就不信会重名
        const dir = path.join(__dirname, `/public/uploads/${yearMonthDay()}`) // 按期日创建文件夹
        if(!fs.existsSync(dir)){
          fs.mkdirSync(dir) 
        }
        file.path = `${dir}/${fileName}` // 完成文件名的修改
      },
    },
  }))
routing(app);

app.listen(5000, () => console.log('服务启动于5000端口...'))