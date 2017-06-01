
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: {},
    objectArray: [
      {
        index: 0,
        tltle: '第一题',
        imgUrl: '../../images/2.jpg',
        time: '2016-09-15',
        ic: 1
      },
      {
        index: 0,
        tltle: '第二题',
        imgUrl: '../../images/18.jpg',
        time: '2016-09-15',
        ic: 2
      },
    ],
    //  item: {
    //   index: 0,
    //   tltle: '第一题',
    //   imgUrl: '../../images/2.jpg',
    //   time: '2016-09-15',
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.setNavigationBarTitle({
      title: '当前页面'
    });


    // var im = document.getElementById('img');

    // console.log(img);


    this.setData({
      // item : {
      //     html:'<view>Hhh</view>'
      //   }
    })





  },
  imageLoad: function (e) {
    console.log(e);


    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 680,           //设置图片显示宽度，左右留有16rpx边距
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
  // imageTest: function (e) {
  //   var $width = e.detail.width,    //获取图片真实宽度
  //     $height = e.detail.height,
  //     ratio = $width / $height;    //图片的真实宽高比例
  //   var viewWidth = 680,           //设置图片显示宽度，左右留有16rpx边距
  //     viewHeight = 680 / ratio;    //计算的高度值
  //   var image = this.data.images;

  //   // console.log(e.target.dataset.index);

  //   //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
  //   image[e.target.dataset.index] = {
  //     width: viewWidth,
  //     height: viewHeight
  //   }
  //   this.setData({
  //     images: image
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})