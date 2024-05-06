import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/login/serviceAgree',
    component: () => import('@/views/login/serviceAgree.vue'),
  },
  {
    path: '/login/privacyPolicy',
    component: () => import('@/views/login/privacyPolicy.vue'),
  },
  {
    path: '/task',
    component: () => import('@/views/task/index.vue'),
  },
  {
    path: '/task/search',
    component: () => import('@/views/task/search.vue'),
  },
  {
    path: '/task/details/:id',
    component: () => import('@/views/task/details.vue'),
  },
  {
    path: '/task/companySourse/:id',
    component: () => import('@/views/task/companySourse.vue'),
  },
  {
    path: '/contract',
    component: () => import('@/views/contract/index.vue'),
  },
  {
    path: '/contract/details/:id',
    component: () => import('@/views/contract/details.vue'),
  },
  {
    path: '/contract/progress/:id',
    component: () => import('@/views/contract/progress.vue'),
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue'),
  },
  {
    path: '/message/systemList',
    component: () => import('@/views/message/systemList.vue'),
  },
  {
    path: '/message/systemDetails/:id',
    component: () => import('@/views/message/systemDetails.vue'),
  },
  {
    path: '/message/talk/:id',
    component: () => import('@/views/message/talk.vue'),
  },
  {
    path: '/my',
    component: () => import('@/views/my/index.vue'),
  },
  {
    path: '/my/user',
    component: () => import('@/views/my/user/index.vue'),
  },
  {
    path: '/my/user/authReal',
    component: () => import('@/views/my/user/authReal.vue'),
  },
  {
    path: '/my/user/certified',
    component: () => import('@/views/my/user/certified.vue'),
  },
  {
    path: '/my/user/identitySwitch',
    component: () => import('@/views/my/user/identitySwitch.vue'),
  },
  {
    path: '/my/set',
    component: () => import('@/views/my/set/index.vue'),
  },
  {
    path: '/my/feedback',
    component: () => import('@/views/my/feedback/index.vue'),
  },
  {
    path: '/my/account',
    component: () => import('@/views/my/account/index.vue'),
  },
  {
    path: '/my/account/advance',
    component: () => import('@/views/my/account/advance.vue'),
  },
  {
    path: '/my/account/coinExplain',
    component: () => import('@/views/my/account/coinExplain.vue'),
  },
  {
    path: '/my/account/depositExplain',
    component: () => import('@/views/my/account/depositExplain.vue'),
  },
  {
    path: '/my/resume',
    component: () => import('@/views/my/resume/index.vue'),
  },
  {
    path: '/my/resume/preview',
    component: () => import('@/views/my/resume/preview.vue'),
  },
  {
    path: '/my/collect',
    component: () => import('@/views/my/collect/index.vue'),
  },
  {
    path: '/talent',
    component: () => import('@/views/talent/index.vue'),
  },
  {
    path: '/talent/details/:id',
    component: () => import('@/views/talent/details.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//路由守卫
router.beforeEach((to, _from, next) => {
  const token = localStorage.token
  const role = localStorage.role
  if(to.path === '/login/serviceAgree' || to.path === '/login/privacyPolicy') {
    next()
  } else if (to.path === '/' && token) {
    if (role == '1' || role == '3') {
      next('/task' );
    } else {
      next('/talent');
    }
  } else if (to.path === '/' && !token) {
    next();
  } else if (to.path !== '/' && !token) {
    next('/login');
  } else if (to.path !== '/' && token) {
    next()
  }

  // if (to.path === '/login' && token) {
  //   if (role == '1' || role == '3') {
  //     next('/task' );
  //   } else {
  //     next('/talent');
  //   }
  // }else if (to.path !== '/login' && !token) {
  //   next('/login');
  // } else if (to.path !== '/login' && token) {
  //   next()
  // }else if (to.path === '/login' && !token) {
  //   next()
  // }
})
export default router
