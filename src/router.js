import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import LandingPage from '@/pages/LandingPage'
import FAQPage from '@/pages/FAQPage'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQPage,
    },
    // {
    //   path: '/',
    //   name: 'videoView',
    //   component: VideoView,
    //   beforeEnter: (to, from, next) => {
    //     // eslint-disable-next-line
    //     if (sessionStorage.authenticated) {
    //       Store.commit('setAuthenticated', true)
    //     }
    //     if (Store.state.authenticated) {
    //       next()
    //     } else {
    //       next('login')
    //     }
    //   },
    // },
    // {
    //   path: '/login',
    //   name: ' login',
    //   component: LoginView,
    //   beforeEnter: (to, from, next) => {
    //     // eslint-disable-next-line
    //     if (!Store.state.authenticated) {
    //       next()
    //     } else {
    //       next('/')
    //     }
    //   },
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
})
