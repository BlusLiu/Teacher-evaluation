// pages/posts/new.js
const postData = require('../../utils/teachers.js')
let id = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: postData[id].title,
    content: postData[id].content,
    id: id
  },
  formSubmit(e) {
    console.log(postData.title)
    console.log('form发生了submit事件')
    const value = e.detail.value
    postData[id].title = e.detail.value.title
    postData[id].content = e.detail.value.content
    console.log(value)
    console.log(postData[id].title)
    
    
    wx.switchTab({
      url: '../lists/list',
    })

  },

  formReset(e) {
    console.log(e)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    id = options['id']
    console.log('ok'+id)
    this.setData({
      title: postData[id].title,
      content: postData[id].content,
      id : id
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