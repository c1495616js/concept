import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main.js'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: debug,
  state: {
    lang: 'tw',
    baseUrl: 'http://104.199.182.22:8080/bpbs'
  },
  actions: {
    setLang (store, payload) {
      store.commit('setLang', payload)
    }
  },
  mutations: {
    setLang (state, payload) {
      // 真正去改變locale的方法
      app.$i18n.locale = payload
      // 改 state
      state.lang = payload
    }
  }
})
