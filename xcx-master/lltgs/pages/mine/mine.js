// pages/my/my.js
var app = getApp()
Page({
  data:{
    userInf:""
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: "我的"
    })
  },
  onShow:function(){
    var that = this;
    wx.getStorage({
      key: "session",
      success: function(res){
        that.setData({
          userInf:res.data.userInfo
        })
        console.log(res.data)
      }
    })
  }
})