// pages/posts/show.js

//定义一个数据集合
let posts = [
  {
    title: '1',
    content: '1'
  },
  {
    title: '2',
    content: '2'
  },
  {
    title: '3',
    content: '3'
  }
]

let post = posts[1]

//随机生成一个不大于3的下标



Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: post
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let n = options['id'] - 1
    console.log(n);
    this.setData({
      post: posts[n]
    })
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