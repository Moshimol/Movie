import {Honye} from '../../../Utils/apis.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{"id":1,"image":"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6043e47b2a474b4495d4e0208a7742d7~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"},{"id":2,"image":"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6043e47b2a474b4495d4e0208a7742d7~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"},{"id":3,"image":"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6043e47b2a474b4495d4e0208a7742d7~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"}],
    swiperHeight:0,
    published:false,
    nowDay:new Date().getDate(),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSysInfo();
  },
  
  getSysInfo(){
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.warn(res);
        that.setData({
          swiperHeight: res.windowWidth*3/5
        })
      },
    })
  },

  getData(){
  
  },

  getBanner(){

  },
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