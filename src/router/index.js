import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // 路由懒加载
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        // 默认子路由
        path: '',
        name: 'Home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa',
        name: 'Qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/me',
        name: 'Me',
        component: () => import('@/views/me/')
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/video/')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article/'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
