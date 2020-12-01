// pages/goods_list/index.js

import {request} from '../../request/index.js'
import regeneratorRuntime  from '../../lib/runtime/runtime.js'


let Queryparams={
  query:'',
  cid:'',
  pagenum:1,
  pagesize:'10'
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    tabs:['综合','销量','价格'],
    currendIndex:0,
    goods:'',
    pages:''
  },
  onSwicthtab(e){
    this.setData({
      currendIndex:e.currentTarget.dataset.index
    });
  },
  onDetailPage(e){
    console.log(e.currentTarget.dataset.id);
    
  },
  async getProductList(){
    const res = await request({
      url:'/goods/search',
      data:Queryparams
    });
    console.log(res.data.message);
    let {goods,total} = res.data.message
    total = Math.ceil(total/10);
    goods = [...this.data.goods,...goods];
    console.log(goods,total)
    this.setData({
      goods,
      pages:total
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Queryparams.cid = options.cid;
    console.log(Queryparams.cid);
    this.getProductList();
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
    Queryparams.pagenum = 1;
    this.getProductList();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let count = Queryparams.pagenum;
    if(Queryparams.pagenum < this.data.pages){
      Queryparams.pagenum ++ ;
      this.getProductList();
    }else{
      wx.showToast({
        title: '我也是有底线的',
        icon: 'success',
        duration: 2000
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})