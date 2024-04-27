import { createRouter, createWebHistory } from 'vue-router'
import HomeEdu from '../views/HomeEdu.vue'
import DetailEdu from '../views/DetailEdu.vue'
import RegisterAuth from '@/views/auth/RegisterAuth.vue'
import LoginAuth from '@/views/auth/LoginAuth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeEdu
    },
    {
      path: '/education',
      name: 'education',
      component: DetailEdu
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterAuth
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAuth
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
