Page({
  data:{
   classList:[],
   isShow:false
  },
  compassChange:function(){
      console.log("1111")
      wx.onCompassChange(function (res) {
        console.log(res.direction)
        })
  },
  requestData:function(){
    this.setData({
      isShow:true
    })
      console.log("请求数据");
      var that = this;
      wx.request({
        url: 'http://datainfo.duapp.com/shopdata/getclass.php', //仅为示例，并非真实的接口地址
        // data: {
        //     x: '' ,
        //     y: ''
        // },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
            that.setData({
               classList:res.data,
               isShow:false 
            })
        }
        })
  },
  openAction:function(){
      wx.showActionSheet({
        itemList: ['拍照', '从相册中选取'],
        success: function(res) {
            if (!res.cancel) {
             console.log(res.tapIndex);
             var index = res.tapIndex;
             switch(index){
                 case 0:
                    wx.showToast({
                        title: '选择的是拍照',
                        icon:"loading",
                        duration: 2000
                        })
                    break;
                case 1:
                     wx.showToast({
                        title: '选择的是照选取',
                        icon: 'success',
                        duration: 2000
                        })
                    break;
             }
            }
        }
        })
  }
 
})