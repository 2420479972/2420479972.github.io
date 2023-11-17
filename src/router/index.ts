import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/star'
    },
    {
      path: '/star',
      component: () => import('@views/firing/index.vue')
    },
    {
      path: '/enroll',
      component: () => import('@views/login-enroll/enroll/index.vue')
    },
    {
      path: '/login',
      component: () => import('@views/login-enroll/login/index.vue')
    },
    {
      path: '/home',
      component: () => import('@views/home/index.vue'),
      redirect: '/home/chat',
      children: [
        {
          path: 'chat',
          component: () => import('@views/home/chat/index.vue')
        }
      ]
    },
    {
      path: '/contacts',
      component: () => import('@views/contacts/index.vue')
    },

    {
      path: '/red-envelope',
      component: () => import('@views/red-envelope/index.vue')
    },
    {
      path: '/make-group',
      component: () => import('@views/group/index.vue')
    },
    {
      path: '/register',
      component: () => import('@views/login-enroll/register/index.vue')
    },
    // {
    //   path: '/find',
    //   component: () => import('@views/find/index.vue')
    // },
    {
      path: '/my',
      component: () => import('@views/my/index.vue')
    },
    {
      path: '/message',
      component: () => import('@views/home/chat-message/index.vue')
    }
  ]
})

export default router
