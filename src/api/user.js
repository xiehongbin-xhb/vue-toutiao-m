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