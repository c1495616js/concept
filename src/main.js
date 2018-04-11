// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

// vuex
import store from './store'

// 多國語言
import i18n from './i18n/index'

// custom axios
import axios from './_axios'

/* use */
// 介面
require('./vendors/css/flag-icon.min.css')
Vue.use(BootstrapVue)

/* eslint-disable no-new */
// const app = Vue.extend()
const app = new Vue({
  el: '#app',
  router,
  i18n,
  axios,
  store,
  template: '<App/>',
  components: {
    App
  }
})

export default app
