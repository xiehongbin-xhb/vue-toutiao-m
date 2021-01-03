// 频道相关请求
// 文章相关
import request from '@/util/request'
// 获取所有频道信息
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/AllChannels'
  })
}
// 添加指定用户频道
export const addUserChannels = (data) => {
  return request({
    method: 'PATCH',
    url: '/addChannels',
    data
  })
}
// 删除指定用户频道
export const deleteUserChannels = (params) => {
  return request({
    method: 'DELETE',
    // 正式环境应这么写
    // url: `/deleteChannels/${channelId}`
    url: '/deleteChannels',
    params
  })
}
