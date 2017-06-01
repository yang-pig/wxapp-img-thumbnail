//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    objectArray: [
      {
        imgUrl: '../../images/2.jpg',
      },
      {
        imgUrl: '../../images/18.jpg',
      },
    ],
    images: {},
  },
  imageLoad : function(e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 680,           //设置图片显示宽度，
      viewHeight = 680 / ratio;    //计算的高度值
    var image = this.data.images;

    // console.log(e.target.dataset.index);

    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }


    this.setData({
      images: image
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
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
