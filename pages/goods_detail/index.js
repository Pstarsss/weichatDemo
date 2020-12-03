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
    attrs:'',
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
   * 添加购物车
   */
  onAddCart(){
    let temp = wx.getStorageSync('cart') || [];

    if(temp.length){
      let item = temp.find(i =>  i.goods_id == this.data.id);
      if(item){
        item.num++ ;
        wx.showToast({
          title: '数量加-',
        })
      }else{
        this.data.List.num = 1;
        this.data.List.checked = false;
        temp.push(this.data.List);
        wx.showToast({
          title: '添加购物车成功',
        })
        wx.setStorageSync('cart', temp);
      }
    }else{
      this.data.List.num = 1;
      this.data.List.checked = false;
      temp.push(this.data.List);
      wx.showToast({
        title: '添加购物车成功',
      })
      wx.setStorageSync('cart', temp);
    }
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