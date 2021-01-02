import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户的登录状态 token等数据
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
      // 为了持久化数据
      window.localStorage.setItem('user', JSON.stringify(state.user));
    }
  },
  actions: {
  },
  modules: {
  }
})
