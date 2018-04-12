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
        name: 'Dashboard',
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
      }
    ]
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
  scrollBehavior: () => ({ y: 0 })
})

// setTimeout(() => {
router.addRoutes(routes)
// }, 1000)

export default router
