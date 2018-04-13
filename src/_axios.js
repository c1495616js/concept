import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

const API_URL = process.env.API_URL || 'http://210.65.47.72/myweb/home'

const HTTP = axios.create({
  // baseURL: API_URL,
  timeout: 3000
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.use(VueAxios, HTTP)

export default HTTP
