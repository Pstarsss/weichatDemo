import {request} from '../../request/index'
import regeneratorRuntime  from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightProductList:[],
    rightCurrentProductList:[],
    currentIndex:0
  },
  async getClassifyData(){
    const params = {
      url:'/categories',
      methods:"GET",
    };
    const res = await request(params);
    console.log(res);
    let leftMenuList = res.data.message.map(item=>item.cat_name);
    let temp = res.data.message.map(item=>item.children);
    this.setData({
      leftMenuList,
      rightProductList:temp,
      rightCurrentProductList:temp[0],
    });
    wx.setStorageSync('classifyData', res.data.message);
  },
  onClickMenu(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      currentIndex:index,
      rightCurrentProductList:this.data.rightProductList[index]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let result = wx.getStorageSync('classifyData');
    if(result.length){
      this.setData({
        leftMenuList:result.map(item=>item.cat_name),
        rightProductList:result.map(item=>item.children),
        rightCurrentProductList:result.map(item=>item.children)[0],
      });
    }else{
      this.getClassifyData();
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