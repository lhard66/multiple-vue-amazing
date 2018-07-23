import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@core/views/index/index.vue')
    }
  ]
})
