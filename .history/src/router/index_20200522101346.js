import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pc_index',
      name: 'mobile',
      component: () => import('@/pages/mobile/home/index')
    },
    {
      path: '/pc',
      name: 'pc',
      component: () => import('@/pages/pc/home/index')
    }
  ]
})
