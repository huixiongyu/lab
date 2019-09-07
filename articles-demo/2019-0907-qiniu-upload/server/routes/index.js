const fs = require('fs')
// 这个文件用来批量自动注册一些路由，不用自己手动添加到app上
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach(file => {
        if(file === 'index.js') { return}
        const route = require(`./${file}`)
        app.use(route.routes()).use(route.allowedMethods())
    })
}