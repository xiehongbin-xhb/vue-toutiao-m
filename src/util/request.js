// 请求模块
import axios from 'axios'
import store from '@/store'
import JSONbig from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  transformResponse: [function (data) {
    // 后端返回的数据可能不是JSON格式字符串
    // 如果不是的话 那么使用 JSONbig.parse 调用就会报错
    try {
      return JSONbig.parse(data);
    } catch (error) {
      // 如果转换失败了，则进入这里 直接把数据原封不动的返回出去
      return data
    }
  }]
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  const { user } = store.state;
  if (user) {
    // 如果用户已登录，统一设置 token
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  // config必须导出
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// 响应拦截器
export default request
