import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/LoginViews.vue'
import Layout from '@/views/Layout/LayoutViews.vue'
import Home from '@/views/Layout/Home/HomeViews.vue'
import User from '@/views/Layout/User/UserViews'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout' // 默认显示layout和layout下的首页
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    redirect: 'Layout/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'user',
        component: User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
