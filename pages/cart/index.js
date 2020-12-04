// pages/cart/index.js
let carts;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    address:'',
    aa:'1'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this);
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
  },
  bindgetuserinfo(item){
    wx.chooseLocation({
      success:(res)=>{
        console.log(this);
        console.log(Page);
        this.setData({
          address:res.address
        });
      },
      fail:function(e){
        wx.showModal({
          cancelColor: 'cancelColor',
          title:'提示',
          content: '您需要重新打开授权才能确认位置',
          success:function(){
            wx.openSetting({})
          },
          fail:function(){
            wx.openSetting({})
          }
        })
      }
      // fail(){
      //   wx.getSetting({
      //     success:function(tt){
      //       wx.chooseAddress({
      //         success:function (result) {
      //           console.log(result)
      //         },
      //         fail:function(){
      //               wx.showModal({
      //           title: '提示',
      //           content: '您未开启保存图片到相册的权限，请点击确定去开启权限！',
      //           success: function() {
      //             wx.openSetting({
      //               withSubscriptions: true,
      //             })
      //           }
      //        })
      //         }
      //       })

      //       // if(!tt.authSetting['scope.userLocation']){
      //       //   wx.showModal({
      //       //     title: '提示',
      //       //     content: '您未开启保存图片到相册的权限，请点击确定去开启权限！',
      //       //     success: function() {
      //       //       wx.openSetting({
      //       //         withSubscriptions: true,
      //       //       })
      //       //     }
      //       //  })
      //       // }
            
      //     }
      //   })
      // }
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