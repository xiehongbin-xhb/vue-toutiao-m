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

// 收藏文章
export const addCollected = (artId) => {
  return request({
    method: 'POST',
    url: '/addCollected',
    data: {
      targetId: artId
    }
  })
}

// 取消收藏
export const deleteCollected = (artId) => {
  return request({
    method: 'POST',
    url: '/deleteCollected',
    data: {
      targetId: artId
    }
  })
}

// 获取用户资料
export const getUserProfile = () => {
  return request({
    method: 'POST',
    url: '/getUserProfile'
  })
}
// 修改用户资料
export const updateUserProfile = (data) => {
  return request({
    method: 'POST',
    url: '/updateUserProfile',
    data
  })
}
