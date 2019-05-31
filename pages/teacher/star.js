var app = getApp()
Page({
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../img/star/cc-star1.png',
    selectedSrc: '../../img/star/cc-star3.png',
    halfSrc: '../../img/star/cc-star2.png',
    key: 1,//评分
    path: ' ',
    userInput: ' ',
    tid: ''
  },


  //点击右边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })

  },
  //点击左边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
  onLoad: function (options) {
    let currtid = options['tid']
    this.setData({
      tid: currtid
    })
    console.log('currtid:'+currtid)
  },


  upload: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            wx.showModal({
              title: '上传文件返回状态',
              content: '成功',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })                          //do something
          },
          fail: function (res) {
            console.log(res)
          }
        })
        that.setData({
          path: tempFilePaths
        })
      }
    })
  },


  textAreaCon: function (e) {
    var that = this;
    that.setData({
      userInput: e.detail.value,
    })
  },
  saveAccess: function (e) {
    if (this.data.userInput == ' ') {
      wx.showModal({
        title: '提示',
        content: '对不起，请输入留言内容',
      })
    } else {
      console.log(this.data.userInput);
      //  成功监听用户输入内容
      const db = wx.cloud.database();
      var that = this
      db.collection('comments').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          comment: that.data.userInput,
          date: new Date(),
          img: "../../img/background.jpg",
          user: "liu",
          tid:that.data.tid,
          star: that.data.key

        },
        success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          // 清空，然后重定向到首页
          console.log("success---->" + res)
          // 保存到发布历史


        },
        complete: function (res) {
          console.log("complete---->" + res)
        }
      })
      wx.navigateTo({
        url: '../teacher/teacherDetail?tid=' + this.data.tid,
      })


    }
  }

})

