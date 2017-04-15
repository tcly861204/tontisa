var app = getApp();
var data = require('./planDate.js');
var util = require('../../utils/util.js');
Page({
  data: {
     hiddenLoading: true,
     rows:[]
  },
  onLoad: function () {
      //页面初始化
      wx.showLoading({
        title: '加载中',
      })
  },
  onShow:function(){
      //页面渲染完成
       wx.hideLoading()
       this.setData({
        rows:data.data
      })
  }
})
