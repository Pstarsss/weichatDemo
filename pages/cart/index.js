// pages/cart/index.js
let carts;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    address:'',
    totalPrice:0,
    totalMount:0,
    payed:false,
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
      carts.forEach(i=>{
        i.checked ?this.setData({
          totalPrice:parseInt(this.data.totalPrice) + parseInt(i.num) * parseInt(i.goods_price),
          totalMount:parseInt(this.data.totalMount) + parseInt(i.num)
        }): '';
      })
    }
  },
  /**
   * 勾选商品
   * @param {*} e 
   */
  changeChecked(e){
    let t2 = e.target.dataset.index
    let map1 = this.data.lists.map((item,index) =>{
        if(index == t2){
          item.checked = !item.checked
          item.checked ?
            this.setData({
              totalPrice:parseInt(this.data.totalPrice) + parseInt(item.num) * parseInt(item.goods_price),
              totalMount:parseInt(this.data.totalMount) + parseInt(item.num)
            })
            :
            this.setData({
              totalPrice:parseInt(this.data.totalPrice) - parseInt(item.num) * parseInt(item.goods_price),
              totalMount:parseInt(this.data.totalMount) - parseInt(item.num)
            })
        }
        return item;
    })
    this.setData({
        lists :map1
    });
  },
  /**
   * 获取用户的位置信息
   * @param {*} item 
   */
  bindgetuserinfo(item){
    wx.chooseLocation({
      success:(res)=>{
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
    })
  },
  /**
   * 全选商品操作
   */
  checkboxchange(){
    carts.forEach(i=>i.checked=!i.checked);
    this.setData({
      lists:carts
    });
  },
  /**
   * 删除商品
   * 删除选中的商品
   * @param {*} e 
   */
  onDel(){
    carts = carts.filter(i=>{
      if(i.checked === false){
        return i;
      }
    });
    this.setData({
      lists: carts
    })
  },
  /**
   * 商品的数据加减
   */
  AddSub(e){
    const {num,index,item} = e.currentTarget.dataset;
    if(carts[index].num < 0){
      return false
    }
    item.checked ?
      this.setData({
        totalPrice:parseInt(this.data.totalPrice) + parseInt(num) * parseInt(item.goods_price),
        totalMount:parseInt(this.data.totalMount) + parseInt(num)
      })
    :
    "";
    carts[index].num = parseInt(carts[index].num) + parseInt(num)
    this.setData({
      lists:carts,
    });
    
  },
  /**
   * 付钱
   */
  toPay(){
    if(this.data.address.length > 0 &&this.data.totalPrice>0){
      wx.showModal({
        title:'提示',
        content:'您是准备起飞了吗',
        success(){
          wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success (res) { console.log(res) },
            fail (res) { console.log(res)}
          })
        }
      })
    }else{
      console.log('12312');
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
    wx.setStorageSync('cart', carts);
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