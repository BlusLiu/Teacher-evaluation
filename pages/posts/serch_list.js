// pages/posts/serch_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacher:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keyword = options['keyword']
    let type = options['type']
    console.log('type:'+type)
    console.log('keyword:'+keyword)
    let page = this
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();
    if (type=='teacher')
    {
      console.log('keyword:')
      db.collection('courses').where({
        tname: keyword
      }).get({//修改
        success(res) {
          console.log(res.data)
          var item = {}
          var i = 0
          for (item in res.data) {
            console.log(res.data[i])
            i++
          }
          page.setData({ teacher: res.data })
        }
      })
    }
    else{
      db.collection('courses').where({
        cname: keyword
      }).get({//修改
        success(res) {
          console.log(res.data)
          var item = {}
          var i = 0
          for (item in res.data) {
            console.log(res.data[i])
            i++
          }
          page.setData({ teacher: res.data })
        }
      })
    }

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