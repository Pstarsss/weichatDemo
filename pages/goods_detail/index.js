// pages/goods_detail/index.js

import {request} from '../../request/index'
import regeneratorRuntime  from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    List:'',
    pics:'',
    attrs:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })  
    this.getProductDetail();
  },
  /**
   * 获取商品的详情数据
   */
  async getProductDetail(){
     let id = this.data.id;
     const res = await request({url:'/goods/detail',
     data:{
       goods_id:id
     }});
     const {pics,attrs}= res.data.message; 
     this.setData({
       List:res.data.message,
       pics,
       attrs,
     });
     console.log(res.data.message);
  },

  /**
   * 图片预览
   */
  onPreviewImage(e){
    let urls = this.data.pics.map(i=>i.pics_mid_url);
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls// 需要预览的图片http链接列表
    })
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