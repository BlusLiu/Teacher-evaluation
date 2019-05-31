// pages/user/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:null,
      uid:'0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    //let currtid = options['id']
    //console.log('currtid:' + currtid)
    let page = this
    this.onLoad
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();
    /*
    db.collection('users').add({
      data: {
        _id: '0',
        name: 'liu'
      }
    })
      .then(res => {
        console.log(res)
      })
    */
    /*
    db.collection('users').where({
      _id: page.data.uid,
    }).get({
      success(res) {
          page.setData({
            username: res.data[0].name
          })
          
        console.log('res.data.name:' + res.data[0].name)
        
      }
    })
*/
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
    let page = this
    this.onLoad
    wx.cloud.init({
      env: 'test-8f1460',
      traceUser: true
    });
    const db = wx.cloud.database();
    /*
    db.collection('users').add({
      data: {
        _id: '0',
        name: 'liu'
      }
    })
      .then(res => {
        console.log(res)
      })
    */
    db.collection('users').where({
      _id: page.data.uid,
    }).get({
      success(res) {
        page.setData({
          username: res.data[0].name
        })

        console.log('res.data.name:' + res.data[0].name)

      }
    })
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

  },
  changename: function () {
    wx.navigateTo({
      url: './changename',
    })
  },
  myclass: function () {
    wx.navigateTo({
      url: '../posts/myclass',
    })
  },
  myteacher: function () {
    wx.navigateTo({
      url: '../posts/myteacher',
    })
  },
  mydiscuss: function () {
    wx.navigateTo({
      url: '../posts/mydiscuss',
    })
  },
  help: function () {
    wx.navigateTo({
      url: '../posts/help',
    })
  },
  settings: function () {
    wx.navigateTo({
      url: '../posts/settings',
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../posts/about',
    })
  }
})

