import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Auth from "@/views/auth/Auth.vue";

import authRoutes from "./auth";

import store from "../store";

Vue.use(Router);

import { User } from "../models/auth/user";

function navigationGuard(to, from , next) {
  if (store.getters.isAuthenticated) {
    next();
  } else if (store.getters.needsVerification) {
    Vue.http
      .post("http://localhost:8000/api/auth/token-verify/", {
        token: store.getters.getToken
      })
      .then(
        response => {
          const user = new User(
            response.body.user.username,
            response.body.user.full_name,
            response.body.user.email,
            response.body.user.groups,
            response.body.user.groups_list
          );
          store.commit("authenticate", {
            user,
            token: response.body.token
          });
          next();
        },
        error => {
          next("auth/login");
        }
      );
  } else {
    next("auth/login");
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        navigationGuard(to, from, next);
      }
    },
    {
      path: "/about",
      name: "about",
      beforeEnter: (to, from, next) => {
        navigationGuard(to, from, next);
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: 'about' */ "@/views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      beforeEnter: (to, from, next) => {
        navigationGuard(to, from, next);
      },
      component: () =>
        import(/* webpackChunkName: 'profile' */ "@/views/auth/Profile.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      children: authRoutes
    }
  ]
});
