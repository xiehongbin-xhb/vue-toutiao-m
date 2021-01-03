import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import './styles/icon.less'
import 'vant/lib/index.css'
import './styles/index.less'
// 自动设置REM基准值 即html标签字体大小：根据不同设备
import 'amfe-flexible'
import mock from '@/mock'
import '@/util/dayjs'
process.env.NODE_ENV === 'development' && mock.init()
Vue.use(Vant)
Vue.config.productionTip = false
// 加载全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
