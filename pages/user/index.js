// pages/user/index.js
let music;
import { request } from '../../request/index.js'
import regeneratorRuntime  from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  

  /**
   * 获取歌曲的数据
   */
    async getMusicList(){
        // const list = await wx.request({
        //   url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
        //   method: 'get',
        //   data:{
        //     method:'baidu.ting.billboard.billList',
        //     type:2,
        //     size:10,
        //     offset:0
        //   },
        //   success(res){
        //     console.log((res));
        //   }
        // })
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