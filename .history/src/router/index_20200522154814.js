import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/404', component: () => import('@/pages/404') },
    {
      path: '/',
      name: 'pages',
      component: () => import('@/pages/index')
    },
    {
      path: '/mobile',
      name: 'mobile',
      redirect: '/mobile/home',
      component: () => import('@/pages/mobile/index'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'home',
          name: 'mobile首页',
          component: () => import('@/pages/mobile/home/index')
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'user',
          name: 'user',
          component: () => import('@/pages/mobile/user/index')
        }
      ]
    },
    {
      path: '/pc',
      name: 'pc',
      redirect: '/pc/home',
      component: () => import('@/pages/pc/index'),
      children: [
        {
          path: 'home',
          name: 'pc首页',
          component: () => import('@/pages/pc/home/index')
        },
        // {
        //   path: '/mobile/user',
        //   name: 'mobile/user',
        //   component: () => import('@/pages/mobile/user/index')
        // }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
