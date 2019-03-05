import { User } from "../models/auth/user";

import Vue from "vue";

export default {
  state: {
    user: null,
    authenticated: false,
    token: localStorage.getItem("token")
  },
  mutations: {
    authenticate(state: any, payload: any) {
      state.authenticated = true;
      state.user = new User(
        payload.user.username,
        payload.user.full_name,
        payload.user.email,
        payload.user.groups,
        payload.user.groups_list
      );
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
    },
    logout(state:any){
      state.authenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  actions: {

  },
  getters: {
    isAuthenticated(state: any): boolean {
      return state.authenticated;
    },
    getUser(state: any): User | null {
      return state.user;
    },
    getToken(state:any): string {
      return state.token;
    },
    needsVerification(state:any): boolean {
      return state.user == null && state.authenticated == false && state.token != null
    },
  }
};
