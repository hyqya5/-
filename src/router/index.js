import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tab',
    component: () => import('@/views/TabDemo'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeDemo')
      },
      {
        path: '/class',
        name: 'home',
        component: () => import('@/views/ClassDemo')
      },
      {
        path: '/car',
        name: 'home',
        component: () => import('@/views/CarDemo')
      },
      {
        path: '/main',
        name: 'home',
        component: () => import('@/views/MainDemo')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
