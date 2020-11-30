// pages/goods_list/index.js

import {request} from '../../request/index.js'
import regeneratorRuntime  from '../../lib/runtime/runtime.js'


let Queryparams={
  query:'',
  cid:'',
  pagenum:1,
  pageSize:'10'
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    tabs:['综合','销量','价格'],
    
  },
 
  async getProductList(){
    const res = await request({
      url:'/goods/search',
      data:Queryparams
    });
    console.log(res.data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Queryparams.cid = options.cid;
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
    this.getProductList();
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