import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'

const API_URL = process.env.API_URL || 'http://104.199.182.22:8080/bpbs'

const HTTP = axios.create({
  baseURL: API_URL,
  timeout: 3000
  // headers: {'X-Custom-Header': 'foobar'}
})

// export const setAuthHeader = (token) => {
//   HTTP.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }

// setAuthHeader(localStorage.getItem('ACCESS_TOKEN'))

Vue.use(VueAxios, HTTP)

export default HTTP
