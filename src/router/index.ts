import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Auth from '@/views/auth/Auth.vue';

import authRoutes from './auth';

import authService from '../services/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // beforeEnter: (to, from, next) => {
      // },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ '@/views/auth/Profile.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children: authRoutes,
    },
  ],
});
