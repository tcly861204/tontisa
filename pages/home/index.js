//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
 
  onLoad: function () {

    // wx.request({
    //   url: 'http://pre.op110.com.cn/sys/main?xwl=342SNBWGIPJN&openID=79B2D9BDF446DCDAE0EBA998200211FACB1C62F417D8BEA047F9B411132CCAD0',
    //   data: {},
    //   method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   header: {
    //       "content-type": "application/x-www-form-urlencoded"
    //   },
    //   success: function(res){
    //     // success
    //   },
    //   fail: function(res) {
    //     // fail
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })

    // wx.request({
    //   url: 'http://pre.op110.com.cn/sys/api/1.0.0/line-plan',
    //   data: {},
    //   method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   header: {
    //     "content-type": "application/x-www-form-urlencoded"
    //   },
    //   success: function(res){
    //     // success
    //   },
    //   fail: function(res) {
    //     // fail
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
