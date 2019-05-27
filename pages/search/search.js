
Page({
  data:{
    searchType: 'keyword',
    hotKeyword: [{ 'hotTagItem': '有趣' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }],
    hotTag: [{ 'hotTagItem': '有趣' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }, { 'hotTagItem': '无聊' }, { 'hotTagItem': 'nice' }]
  },
  changeSearchType: function() {
    var types = ['老师', '课程'];
    var searchType = ['keyword', 'tag']
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
      message.show.call(that,{
        content: '请输入内容',
        icon: 'null',
        duration: 1500
      })
      return false
    } else {
      var searchUrl = that.data.searchType == 'keyword' ? config.apiList.search.byKeyword : config.apiList.search.byTag
      wx.redirectTo({
        url: '../searchResult/searchResult?url=' + encodeURIComponent(searchUrl) + '&keyword=' + keyword
      })
    }
  },
  searchByKeyword: function(e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byKeyword) + '&keyword=' + keyword
    })
  },
  searchByTag: function(e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(config.apiList.search.byTag) + '&keyword=' + keyword
    })
  }
})