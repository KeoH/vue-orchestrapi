export default [
    {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: 'login' */ '@/views/auth/Login.vue'),
      },
      {
        path: 'logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: 'logout' */ '@/views/auth/Logout.vue'),
      },
];
