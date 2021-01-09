// day.js
import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTIme from 'dayjs/plugin/relativeTime'
// 配置使用处理相对时间
dayjs.extend(relativeTIme);
// 配置使用中文语言包
dayjs.locale('zh-cn');
// 注册全局过滤器
// 在模板中使用 {{ value | relativeTime}}
Vue.filter('relativeTime', value => {
  return dayjs(value).from(dayjs());
})

Vue.filter('dateTime', value => {
  return dayjs(value).format('MM-DD HH:mm');
})
