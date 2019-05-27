// pages/posts/daohang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher: [
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '舒亚飞',
        class: '微信小程序',
        grade: '5.0',
        peoplenumber: '1'
      },
      {
        id: 1,
        pic: '../../img/background.jpg',
        name: '舒亚飞',
        class: 'javaweb',
        grade: '5.0',
        peoplenumber: '1'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '教师姓名',
        class: '教授课程',
        grade: '0.0',
        peoplenumber: '0'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '教师姓名',
        class: '教授课程',
        grade: '0.0',
        peoplenumber: '0'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '教师姓名',
        class: '教授课程',
        grade: '0.0',
        peoplenumber: '0'
      }
    ],
    type: [
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '电子'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '计算'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '会计'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '类别'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '类别'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '类别'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '类别'
      },
      {
        id: 0,
        pic: '../../img/background.jpg',
        name: '类别'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toTeacher:function(){
      wx.navigateTo({
        url: '../teacher/teacherDetail',
      })
  },
  toSearch:
    function () {
      wx.navigateTo({
        url: '../search/search',
      })
    },
  onLoad: function (options) {

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