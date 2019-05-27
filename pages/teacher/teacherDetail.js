// pages/teacher/teacherDetail.js
Page({
  data: {
    name: '苏老师',
    course: '微信开发',
    id: null,
    two: true,
    hotTag: [{ 'hotTagItem': '有趣' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }],
    commentData: []
  },

  onLoad: function (options) {
    let page = this
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();
    db.collection('comments').orderBy('date', 'desc').get({
      success(res) {
        console.log(res.data)
        console.log(res.data[0].date)
        var item ={}
        var i = 0
        for (item in res.data)
        {
          console.log(res.data[i].date)
          i++
        }
        page.setData({ commentData: res.data })
      }
      
    })


    /*
    var id = 0;
    var comment = options['comment']
    //var star = options['star']
    console.log('ok' + comment)
    id = options['id']
    console.log('id:' + id)
    var mycomment = [{ "img": '../../img/background.jpg', "user": 'liu', "comment": 'good这个老师超级超级号！这个老师超级超级号！这个老师超级超级号！', "data": '2019/5/12', "id": 1 }, { "img": '../../img/background.jpg', "user": 'liu', "comment": '这个老师超级超级号！', "data": '2019/5/12', "id": 2 }, { "img": '../../img/background.jpg', "user": 'liu', "comment": 'good', "data": '2019/5/12', "id": 3 }, { "img": '../../img/background.jpg', "user": 'liu', "comment": '这个老师超级超级号！这个老师超级超级号！这个老师超级超级号！这个老师超级超级号！', "data": '2019/5/12', "id": 4}]
    if (comment != null) {

      var newComment = { "img": '../../img/background.jpg', "user": 'liu', "comment": comment, "data": '2019/5/12' }
      mycomment.push(newComment)
    }

    this.setData({
      //title: postData[id].title,
      commentData: mycomment,
      id: id
    })
    */

  },
  pingjia: function () {
    wx.navigateTo({
      url: '../teacher/star',
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