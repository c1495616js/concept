import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'// https://github.com/se-panfilov/mini-toastr

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({types: toastTypes})

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
//  VueNotifications.setPluginOptions(options)

Vue.use(VueNotifications, options)

export default {
  showSuccessMsg: {
    type: VueNotifications.types.success,
    title: 'Hello there',
    message: 'That\'s the success!'
  },
  showInfoMsg: {
    type: VueNotifications.types.info,
    title: 'Hey you',
    message: 'Here is some info for you'
  },
  showWarnMsg: {
    type: VueNotifications.types.warn,
    title: 'Wow, man',
    message: 'That\'s the kind of warning'
  },
  showErrorMsg: {
    type: VueNotifications.types.error,
    title: 'Wow-wow',
    message: 'That\'s the error'
  }
}
