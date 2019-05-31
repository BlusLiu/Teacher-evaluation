
Page({
  data:{
    searchType: 'teacher',
    hotKeyword: [{ 'hotTagItem': '马老师' }, { 'hotTagItem': '苏老师' }],
    hotTag: [{ 'hotTagItem': '毛概' }, { 'hotTagItem': '马原' }, { 'hotTagItem': '电分' }, { 'hotTagItem': '数电' }, { 'hotTagItem': '计组' }]
  },
  changeSearchType: function() {
    var types = ['老师', '课程'];
    var searchType = ['teacher', 'course']
    var that = this
    wx.showActionSheet({
      itemList: types,
      success: function(res) {
        console.log(res)
        if (!res.cancel) {
          that.setData({
            searchType: searchType[res.tapIndex]
          })
        }
      }
    })
  },
  search: function(e) {
    var that = this
    var keyword = e.detail.value.keyword
    if (keyword == '') {
      //message.show.call(that,{
      //  content: '请输入内容',
      //  icon: 'null',
      //  duration: 1500
      //})
      return false
    } else {
      //if(that.data.searchType == 'teacher')
      wx.redirectTo({
        url: '../posts/serch_list?keyword=' + keyword + '&type=' + that.data.searchType
      })
    }
  },
  searchByKeyword: function(e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    console.log('keyword:' + keyword)
    wx.redirectTo({
      url: '../posts/serch_list?keyword=' + keyword + '&type=' + 'teacher'
    })
  },
  searchByTag: function(e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../posts/serch_list?keyword=' + keyword+'&type=' + 'course'
    })
  }
})