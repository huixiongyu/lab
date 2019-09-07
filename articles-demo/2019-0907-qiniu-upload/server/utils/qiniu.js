const qiniu = require('qiniu')
const { qiniuConfig }  = require('../config/secure')

// 获取七牛上传Token
function getQiniuToken() {
    const mac = new qiniu.auth.digest.Mac(qiniuConfig.AK, qiniuConfig.SK);
    const policyParams = { scope: qiniuConfig.bucket, expires: 7200 }
    const putPolicy = new qiniu.rs.PutPolicy(policyParams);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
}


module.exports = getQiniuToken;