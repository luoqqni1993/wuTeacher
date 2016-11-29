//index.js
//获取应用实例
var app = getApp()
Page({
  //data就是默认的初始数据，
  //在页面中可以通过{{}}进行去渠道数据，直接渲染在页面上
  data: {
    current:0,
     indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 300,
    // bannerImgs:{
    //  banner0: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    //  banner1: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
    //  banner2: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    // }
    // imgs:[
    //   "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    //   "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
    //   "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    // ]
    //  imgs:[
    //   {id:0,src: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"},
    //   {id:1,src:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"},
    //   {id:2,src:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"}
    // ]
  },
  //事件处理函数
  changeIndex: function(event) {
    console.log(event)
  
    this.setData({
      current:event.target.dataset.index
    })

  // console.log(this.data.current)
  },
  slideChange:function(event){
      console.log(event)

      this.setData({
        current:event.detail.current
      })
  },
  upper: function(e) {
    console.log("上天啦")
    console.log(e)
  },
  lower: function(e) {
    console.log("到底啦")
    console.log(e)
  },
  scroll: function(e) {
     console.log("游啊游")
    console.log(e)
  },
  pullDownAction:function(){
    console.log("来吧，下来吧")
  },
  pullUpAction:function(){
    console.log("上拉")
  },
  onLoad: function () {
    
  }
})
