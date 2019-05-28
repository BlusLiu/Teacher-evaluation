// pages/teacher/teacherDetail.js
Page({
  data: {
    tname: '苏老师',
    cname: '微信开发',
    tid: null,
    two: true,
    star: 5,
    hotTag: [{ 'hotTagItem': '有趣' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }],
    commentData: []
  },

  onLoad: function (options) {
    let currtid = options['id']
    console.log(currtid)
    let page = this
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();
    db.collection('comments').where({
      tid: currtid,
    }).orderBy('date', 'desc').get({
      success(res) {
        console.log(res.data)
        console.log(res.data[0].date)
        var item ={}
        var i = 0
        page.setData({ commentData: res.data })
        for (item in page.data.commentData) {
          var tempTime = res.data[i].date.getFullYear() + "/" + res.data[i].date.getMonth() + "/"+res.data[i].date.getDate()
          page.data.commentData[i].dateStr = tempTime
          console.log(tempTime)
          console.log('page.data.commentData[i].dateStr:' + page.data.commentData[i].dateStr)
          i++
        }
        console.log('commentData:' + JSON.stringify(page.data.commentData))
        var tempComment = page.data.commentData
        page.setData({ commentData: tempComment })
      }
      
    })
    db.collection('courses').where({
      tid: currtid 
    }).get({
      success(res) {
        console.log(res.data)
        page.setData({ tname: res.data[0].tname,
         cname: res.data[0].cname,
         star: res.data[0].star,
         tid: res.data[0].tid
          })
      }

    })

  },
  pingjia: function () {
    wx.navigateTo({
      url: '../teacher/star?tid='+this.data.tid,
    })
  },
  toOne: function () {
    this.setData({ two: true })
    this.onLoad
  },

  toTwo: function () {
    this.setData({ two: false })
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