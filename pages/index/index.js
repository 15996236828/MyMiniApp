//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    data:0
  },
  clickMe: function() {
    wx.switchTab({
      url: '../other/other',
    })
  },
  clickto_pageA:function(){
    wx.navigateTo({
      url: '../pageA/pageA',
    })
  },
  clickoversize:function(){
     var x = 5/0.0/0;
    var pi = 3.14159; 
    pi.toFixed(100000);  
    console.log(pi);   //参数范围越界
 },
  
  clickglobalData:function(){
    for(var i = 0; i < 1000000; i++)
      app.globalData.id +="158295952";
    console.log(app.globalData.id);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clicksetData:function(){
    this.setData({
      data:5
    })
    // console.log(this.data.data)
    // var x = new Array(-5);
    // this.setData({
    //   data:this.data.data
    // })
  },

  clicktrigger:function(){
    this.setData({
      data:this.data.data
    })
  },

  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
   },
   onLoad: function (option) {
    console.log('---onLoad---')
  },
  onReady: function () {
    console.log("page ---onReady---");
  },
  onShow: function () {

    console.log("page ---onShow---");
  },
  onHide: function () {
    console.log("page ---onHide---");
  },
  onUnload: function () {
  }
})
