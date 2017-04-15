var data = require('../../data.js');
Page({
  data: {
    id:0,
    imgList:[],
    index:0,
    obj:null,
    flag:false
  },
  onLoad:function(options){
      this.setData({
          id:options.id
      })
  },
  onShow:function(){
      var imgList = data.ImageList,obj1=null,that = this,index = 0;
      for(var i=0;i<imgList.length;i++){
          if(imgList[i].id*1===this.data.id*1){
              index = i;
          }
      }
      wx.setNavigationBarTitle({
          title: imgList[this.data.index].company
      })
      for(var i in imgList){
          if(i<index){
              imgList[i].clsName = 'item0';
          }else if(i>index){
              imgList[i].clsName = 'item2';
          }else{
              imgList[i].clsName = 'item1';
          }
      }
       wx.getStorage({
            key: 'ImageList',
            success: function(res) {
                that.setData({
                    imgList:imgList,
                    obj:imgList[1],
                    index:index
                })
               
            } 
        })
   },
   touchStartClienX: 0,
   touchStartClientY: 0,
   touchEndClientX: 0,
   touchEndClientY: 0,
   isMultiple: false,
   touchStart:function(events){
        this.isMultiple = events.touches.length > 1;
        if (this.isMultiple) {
            return;
        }
        var touch = events.touches[0];
        this.touchStartClientX = touch.clientX;
        this.touchStartClientY = touch.clientY;
        this.touchEndClientX = 0;
        this.touchEndClientY = 0;
   },
   touchMove:function(events){
        var touch = events.touches[0];
        this.touchEndClientX = touch.clientX;
        this.touchEndClientY = touch.clientY;
   },
   transitionend:function(){
        this.data.flag = false;
   },
   touchEnd:function(events){
        if (this.isMultiple) {
            return;
        }
        if(this.data.flag){
            return;
        }
        if(this.touchEndClientX===0){
            return;
        }
        var dx = this.touchEndClientX - this.touchStartClientX;
        var dy = this.touchEndClientY - this.touchStartClientY;
        var index = 0;
        if(dx>30 && Math.abs(dx)>Math.abs(dy)){   //向右滑
            this.data.flag = true;
            let preIndex = this.data.index;
            if(this.data.index<=0){
                this.data.flag = false;
                return;
            }
            this.data.index--;
            let nextIndex = this.data.index;
            var arr = this.data.imgList;
            arr[preIndex].clsName = 'item2';
            arr[nextIndex].clsName = 'item1';
            this.setData({
                imgList:arr,
                obj:arr[nextIndex]
            });
        }
        if(dx<-30 && Math.abs(dx)>Math.abs(dy)){   //向左滑
            this.data.flag = true;
            let preIndex = this.data.index;
            if(this.data.index>=this.data.imgList.length-1){
                this.data.flag = false;
                return;
            }
            this.data.index++;
            let nextIndex = this.data.index;
            var arr = this.data.imgList;
            arr[preIndex].clsName = 'item0';
            arr[nextIndex].clsName = 'item1';
            this.setData({
                imgList:arr,
                obj:arr[nextIndex]
            });
        }
        wx.setNavigationBarTitle({
            title: this.data.imgList[this.data.index].company
        })
   },
   onShareAppMessage: function () {
        return {
            title: '深圳同天下同业广告',
            path: '/pages/details/index?id='+this.data.index,
            success: function(res) {
                console.log(res);
                // 分享成功
            },
            fail: function(res) {
                // 分享失败
            }
        }
    }
})