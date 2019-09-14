function http(method, url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      success(res) {
        resolve(res)
      },
      fail() {
        reject({
          msg: `${url}请求错误`
        })
      }
    })
  }) 
}

module.exports = http;