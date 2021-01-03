// 文章相关
import request from '@/util/request'
// 获取用户登录信息
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/articles',
    params
  })
}
