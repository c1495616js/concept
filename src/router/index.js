import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views

const createRoute = (path) => {
  return () => import(`@/views/${path}.vue`)
}

// let mapping = {
//   Dashboard: createRoute('Dashboard'),
//   Page500: createRoute('pages/Page500'),
//   Test: createRoute('Test')
// }

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Full,
    children: [
      {
        path: 'dashboard',
        name: '儀表板',
        component: createRoute('Dashboard')
      },
      {
        path: 'Page500',
        component: createRoute('pages/Page500')
      },
      {
        path: 'monitor/list',
        name: 'Test',
        component: createRoute('Test')
      },
      {
        path: 'bp/bps',
        name: '業者清單',
        component: createRoute('bp/bps/Bps')
      },
      {
        path: 'setting/users',
        name: '帳號管理',
        component: createRoute('setting/users/Users')
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: createRoute('pages/Login')
  },
  {
    path: '*',
    name: '500',
    redirect: '/Page500'
  }
]

let router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('ACCESS_TOKEN')
  if (to.path === '/login') { // 如果是跳转到登录页的
    if (token !== 'null' && token !== null) {
      next('/') // 如果有token就转向todolist不返回登录页
    }
    next() // 否则跳转回登录页
  } else {
    if (token !== 'null' && token !== null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = token // 注意Bearer后有个空格
      next() // 如果有token就正常转向
    } else {
      next('/login') // 否则跳转回登录页
    }
  }
})

// setTimeout(() => {
// router.addRoutes(routes)
// }, 1000)

export default router
