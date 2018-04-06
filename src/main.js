// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

// i18n
import VueI18n from 'vue-i18n'
import messages from './lang/index'

/* use */
Vue.use(BootstrapVue)
Vue.use(VueI18n)

// 多國語言
const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {
    App
  }
})
