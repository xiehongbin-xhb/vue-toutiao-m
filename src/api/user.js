// 用户相关请求模块
import request from '@/util/request'
// 登录注册
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data
  })
}
// 发送验证码
export const sendSms = (mobile) => {
  return request({
    method: 'GET',
    url: `/sms/codes/${mobile}`
  })
}
// 获取用户登录信息
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/user'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}
