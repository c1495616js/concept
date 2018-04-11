import Vue from 'vue'
import VueI18n from 'vue-i18n'

import gb from './gb.json'
import tw from './tw.json'

import store from '../store'

Vue.use(VueI18n)

const locale = store.state.lang

const messages = {
  gb,
  tw
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
