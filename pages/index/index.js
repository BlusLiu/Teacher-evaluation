//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '为师生谊干杯!',
    userInfo: {},
  
  },

  onLoad: function () {
    wx.hideTabBar({}),
    console.log('hide');
  },

  jumpPage:function(){
    wx.showTabBar({}),
    wx.switchTab({
        url: '../lists/list',
      })
    console.log('Error');
  }
})
