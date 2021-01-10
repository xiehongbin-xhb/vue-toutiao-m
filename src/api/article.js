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
// 对评论或者评论回复点赞
export const addCommentLike = (commentId) => {
  return request({
    method: 'POST',
    url: '/addCommentLike',
    data: {
      target: commentId
    }
  })
}

// 取消对评论或者评论回复点赞
export const deleteCommentLike = (commentId) => {
  return request({
    method: 'POST',
    url: '/deleteCommentLike',
    data: {
      target: commentId
    }
  })
}

// 添加评论或评论回复
export const addComments = (data) => {
  return request({
    method: 'POST',
    url: '/addComments',
    data
  })
}
