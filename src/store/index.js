import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/util/storage'

Vue.use(Vuex)
const USER_KEY = 'toutiao-user';

export default new Vuex.Store({
  state: {
    // 当前登录用户的登录状态 token等数据
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
      // 为了持久化数据
      setItem(USER_KEY, state.user);
    }
  },
  actions: {
  },
  modules: {
  }
})
