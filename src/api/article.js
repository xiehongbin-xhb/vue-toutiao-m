// 文章相关
import request from '@/util/request'
//  获取文章列表
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/articles',
    params
  })
}

// 获取文章详情
export const getArticleContent = (params) => {
  return request({
    method: 'GET',
    url: '/articlesContent',
    params
  })
}

// 获取文章评论或评论回复
export const getComments = (params) => {
  return request({
    method: 'GET',
    url: '/comments',
    params
  })
}
