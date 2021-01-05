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
// 获取搜索结果
export const getSearchResults = params => {
  return request({
    method: 'GET',
    url: '/searchResults',
    params
  })
}
// 获取用户搜索历史
export const getSearchedHistory = () => {
  return request({
    method: 'GET',
    url: '/searchedHistory'
  })
}
