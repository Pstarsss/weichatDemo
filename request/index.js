const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
export const request = (params)=>{
  if(!params.methods){
    params.methods = 'GET';
  }
  params.url = baseUrl + params.url;
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success(result){
        resolve(result);
      },
      fail(err){
        reject(err);
      }
    });
  });
}