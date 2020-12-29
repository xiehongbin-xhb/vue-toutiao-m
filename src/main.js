import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant'
import './styles/icon.less'
import 'vant/lib/index.css'
// 自动设置REM基准值 即html标签字体大小：根据不同设备
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false
// 加载全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
