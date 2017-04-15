Page({
  data: {
    id:0,
    img:null,
    title:null
  },
   onLoad:function(options){
      console.log(options);
      this.setData({
          id:options.id,
          img:options.img,
          title:options.title
      })
  }
})