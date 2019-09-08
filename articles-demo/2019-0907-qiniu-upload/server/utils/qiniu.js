const qiniu = require('qiniu')
const { qiniuConfig }  = require('../config/secure')

// 获取七牛上传Token
function getQiniuToken() {
    const mac = new qiniu.auth.digest.Mac(qiniuConfig.AK, qiniuConfig.SK)
    const options = { 
        scope: qiniuConfig.bucket,
        expires: 7200 
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    return uploadToken;
}

// 获取上传Token并且能指定文件名字
function getQiniuTokenWithName(nameReWrite) {
    const mac = new qiniu.auth.digest.Mac(qiniuConfig.AK, qiniuConfig.SK)
    const options = { 
        scope: qiniuConfig.bucket + ":" + nameReWrite, 
        expires: 7200 
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    return uploadToken 
}

module.exports = { getQiniuToken, getQiniuTokenWithName}