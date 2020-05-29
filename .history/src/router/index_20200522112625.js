import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pages',
      component: () => import('@/pages//index')
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('@/pages/mobile/home/index'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/mobile/user',
          name: 'mobile/user',
          component: () => import('@/pages/mobile/user/index')
        }
      ]
    },
    {
      path: '/pc',
      name: 'pc',
      component: () => import('@/pages/pc/home/index')
    }
  ]
})
