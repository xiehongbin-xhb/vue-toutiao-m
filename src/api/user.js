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
// 获取用户登录信息
export const getUserChannel = () => {
  return request({
    method: 'GET',
    url: '/channels'
  })
}

// 关注用户
export const addFollower = (userId) => {
  return request({
    method: 'POST',
    url: '/addFollower',
    data: {
      targetId: userId
    }
  })
}

// 取消关注用户
export const deleteFollower = (userId) => {
  return request({
    method: 'POST',
    url: '/deleteFollower',
    data: {
      targetId: userId
    }
  })
}
