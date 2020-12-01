const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
let count = 0;
export const request = (params)=>{
  if(!params.methods){
    params.methods = 'GET';
  }
  params.url = baseUrl + params.url;
  wx.showToast({
    title: '数据加载中',
    icon: 'success',
    duration: 2000
  })
  count++;
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success(result){
        resolve(result);
      },
      fail(err){
        reject(err);
      },
      complete(){
        count--;
        if(count === 0){
          wx.hideToast({
            success: (res) => {},
          })
        }
        
      }
    });
  });
}