// 搜索请求相关模块
import request from '@/util/request'
// 获取搜索请求建议
export const getSearchSuggestions = (q) => {
  return request({
    method: 'GET',
    url: '/searchSuggestions',
    params: {
      q
    }
  })
}
