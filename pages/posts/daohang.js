// pages/posts/daohang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher: [

    ],
    type: [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toTeacher:function(){
      //wx.navigateTo({
      //  url: '../teacher/teacherDetail',
      //})
  },
  toSearch:
    function () {
      wx.navigateTo({
        url: '../search/search',
      })
    },
  onLoad: function (options) {
    let page = this
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();

    db.collection('category').get({//修改
      success(res) {
        //console.log(res.data)
        var item = {}
        var i = 0
        for (item in res.data) {
          //console.log(res.data[i])
          i++
        }
        page.setData({ type: res.data })
      }

    })

    db.collection('courses').orderBy('peoplenumber', 'desc').get({//修改
      success(res) {
        console.log(res.data)
        var item = {}
        var i = 0
        for (item in res.data) {
          //console.log(res.data[i])
          i++
        }
        page.setData({ teacher: res.data })
      }

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