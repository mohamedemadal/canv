import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'

const routes: Array<RouteRecordRaw> = [

  {
    name: 'test',
    path: '/test',
    component: () => import('../frontend/pages/test.vue'),
  },
  {
    name: 'contact-us',
    path: '/contact-us',
    component: () => import('../frontend/pages/contact-us.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../frontend/pages/login.vue'),
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('../frontend/pages/signup.vue'),
  },
  {
    name: 'home',
    path: '/',
    component: () => import('../frontend/pages/index.vue'),
  },
  {
    name: 'about-us',
    path: '/about',
    component: () => import('../frontend/pages/about-us.vue'),
  },
  {
    name: 'auctions',
    path: '/auctions',
    component: () => import('../frontend/pages/auctions.vue'),
  },
  {
    name: 'auction-details',
    path: '/auction-details/:id',
    component: () => import('../frontend/pages/auction-details.vue'),
  },
  {
    name: 'jobs',
    path: '/jobs',
    component: () => import('../frontend/pages/jobs.vue'),
  },
  {
    name: 'jobs-details',
    path: '/jobs-details/:id',
    component: () => import('../frontend/pages/job-details.vue'),
  },
  {
    name: 'job-apply',
    path: '/job-apply/:id/:job_id',
    component: () => import('../frontend/pages/job-apply.vue'),
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    beforeEnter: auth,
    children: [

      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },




      {
        name: 'statistics',
        path: 'users_management',
        // component: RouteViewComponent,
        children: [
          {
            name: 'users',
            path: 'users',
            component: () => import('../pages/admin/users.vue'),
          },



        ],
      },
      {
        name: 'tourism-management',
        path: 'product',
        // component: RouteViewComponent,
        children: [




        ],
      },

      {
        name: 'settings',
        path: 'settings',
        // component: RouteViewComponent,
        children: [





        ],
      },

      UIRoute,
    ],
  },

  {
    path: '/auth',
    component: AuthLayout,
    children: [

      // {
      //   name: 'signup',
      //   path: 'signup',
      //   component: () => import('../pages/auth/signup/Signup.vue'),
      // },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    path: '/404',
    component: Page404Layout,
    children: [
      {
        name: 'not-found-advanced',
        path: 'not-found-advanced',
        component: () => import('../pages/404-pages/VaPageNotFoundSearch.vue'),
      },
      {
        name: 'not-found-simple',
        path: 'not-found-simple',
        component: () => import('../pages/404-pages/VaPageNotFoundSimple.vue'),
      },
      {
        name: 'not-found-custom',
        path: 'not-found-custom',
        component: () => import('../pages/404-pages/VaPageNotFoundCustom.vue'),
      },
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () => import('../pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      document.querySelector('.app-layout__page')?.scrollTo(0, 0)
    }
  },
  routes,
})

function auth(to: any, from: any, next: any) {
  if (!localStorage.getItem('token')) {
    return next({ name: 'login' })
  }

  next()
}

export default router
