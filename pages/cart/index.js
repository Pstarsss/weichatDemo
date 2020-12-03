// pages/cart/index.js
let carts;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    carts = wx.getStorageSync('cart');
    if(carts.length){
      this.setData({
        lists:carts
      })
      console.log(this.data.lists);
    }
  },
  changeChecked(e){
    let t2 = e.target.dataset.index;
    let map1 = this.data.lists.map((item,index) =>{
        if(index == t2){
          item.checked = !item.checked
        }
        return item;
    })
    this.setData({
        lists :map1
    });
    console.log(this.data.lists);
  },
  bindgetuserinfo1(item){
    console.log(item)
  },
  bindgetuserinfo(item){
    console.log(item);
    // bindgetuserinfo();
    // wx.chooseLocation({
    //   success(e){
    //     console.log(e);
    //     console.log(e.address);
    //   },
    //   fail(e){
    //     console.log(e)
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