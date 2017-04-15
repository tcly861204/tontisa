var app = getApp();
var data = require('../data.js');
Page({
  data: {
    ImageList:[],
    userInfo: {},
    show:'close',
    searchEmptyText:''
  },
  onReady:function(){
    wx.setNavigationBarTitle({
        title: '同业广告'
    })
  },
  bindSearch:function(e){
    
    console.log(e.detail.value);
  },
  onLoad:function(){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindShowSidebar:function(){
    if(this.data.show==='close'){
      this.setData({
        show:'open'
      })
    }else{
      this.setData({
        show:'close'
      })
    }
  },
  onShow:function(){
    this.setData({
      ImageList:data.ImageList
    });
    wx.setStorage({
      key:"ImageList",
      data:data.ImageList
    })
  }
})