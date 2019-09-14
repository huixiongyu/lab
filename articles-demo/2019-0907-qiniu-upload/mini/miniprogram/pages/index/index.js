import regeneratorRuntime from '../../utils/runtime.js'
import http from '../../utils/http.js'
import { tokenURL, qiniuPostURL, accessURL } from '../../config/url.js'
var app = getApp();
// 最大上传图片数量
const MAX_IMG_NUM = 9
// 输入的文字内容
let content = ''
let userInfo = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入的文字个数
    wordsNum: 0,
    footerBottom: 0,
    images: [],
    selectPhoto: true, // 添加图片元素是否显示
    imagePaths: [],
    token: ''
  },
  onLoad() {
    this.fetchToken()
  },
  async fetchToken() {
    const res = await http('GET', tokenURL, {})
    const token = res.data.token
    console.log(token) 
    this.setData({
      token
    })
  },  
  // 文字输入
  onInput(event) {
    let wordsNum = event.detail.value.length
    this.setData({
      wordsNum
    })
    content = event.detail.value
  },

  onFocus(event) {
    // 模拟器获取的键盘高度为0
    // console.log(event)
    this.setData({
      footerBottom: event.detail.height,
    })
  },
  onBlur() {
    this.setData({
      footerBottom: 0,
    })
  },

  onChooseImage() {
    // 还能再选几张图片
    let max = MAX_IMG_NUM - this.data.images.length
    wx.chooseImage({
      count: max,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res)
        this.setData({
          images: this.data.images.concat(res.tempFilePaths)
        })
        // 还能再选几张图片
        max = MAX_IMG_NUM - this.data.images.length
        this.setData({
          selectPhoto: max <= 0 ? false : true
        })
        console.log(this.data.images);
      },
    })
  },
  // 删除图片
  onDelImage(event) {
    this.data.images.splice(event.target.dataset.index, 1)
    this.setData({
      images: this.data.images
    })
    if (this.data.images.length == MAX_IMG_NUM - 1) {
      this.setData({
        selectPhoto: true,
      })
    }
  },

  onPreviewImage(event) {
    // 6/9
    wx.previewImage({
      urls: this.data.images,
      current: event.target.dataset.imgsrc,
    })
  },
  // 七牛上传的逻辑
  qiniuUpload() {
    const that = this
    if (content.trim() === '') {
      wx.showModal({
        title: '请输入内容',
        content: '',
      })
      return
    }

    wx.showLoading({
      title: '发布中',
      mask: true,
    })    
    let promiseArr = []
    let fileList = []
    for (let i = 0, len = this.data.images.length; i < len; i++) {
      let p = new Promise((resolve, reject) => {
        let item = this.data.images[i]
        wx.uploadFile({
          url: qiniuPostURL,
          filePath: item,
          name: 'file',
          formData: {
            token: this.data.token
          },
          success(res) {
            const data = JSON.parse(res.data)
            console.log(data)
            const key = data['key']
            console.log(key)
            console.log(accessURL)
            const link = accessURL + '/' + key
            console.log(link)
            fileList = fileList.concat(link)
            resolve()
          },
          fail: (err) => {
            console.error(err)
            reject()
          }
        })
      })
      promiseArr.push(p)    
    }
    Promise.all(promiseArr).then((res) => {
      console.log(fileList)
      app.globalData.imgList = fileList
      wx.hideLoading()
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000
      })
      console.log('上传完毕了')
      wx.navigateTo({
        url: '/pages/display/index',
      })
    }).catch((err) => {
      wx.hideLoading()
      wx.showToast({
        title: '发布失败',
      })
    })    
  },
  upload() {
    const that = this
    if (content.trim() === '') {
      wx.showModal({
        title: '请输入内容',
        content: '',
      })
      return
    }

    wx.showLoading({
      title: '发布中',
      mask: true,
    })

    let promiseArr = []
    let fileIds = []
    // 图片上传
    for (let i = 0, len = this.data.images.length; i < len; i++) {
      let p = new Promise((resolve, reject) => {
        let item = this.data.images[i]
        // 文件扩展名
        let suffix = /\.\w+$/.exec(item)[0]
        wx.cloud.uploadFile({
          cloudPath: 'code/' + Date.now() + '-' + Math.random() * 1000000 + suffix,
          filePath: item,
          success: (res) => {
            console.log(res.fileID)
            fileIds = fileIds.concat(res.fileID)
            resolve()
          },
          fail: (err) => {
            console.error(err)
            reject()
          }
        })
      })
      promiseArr.push(p)
    }
    // 全部上传完之后跳转到展示页面
    Promise.all(promiseArr).then((res) => {
      console.log(res)
      console.log(fileIds)
      app.globalData.imgList = fileIds
      wx.hideLoading()
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000        
      })
      console.log('上传完毕了')
      wx.navigateTo({
        url: '/pages/display/index',
      })
    }).catch((err) => {
      wx.hideLoading()
      wx.showToast({
        title: '发布失败',
      })
    })
  },
})