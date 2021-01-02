// 请求模块
import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
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
