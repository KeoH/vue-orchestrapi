import { User } from "../models/auth/user";

export default {
  state: {
    user: null,
    authenticated: false,
    token: null
  },
  mutations: {
    authenticate(state: any, payload: any) {
      if (payload["username"] === "keoh" && payload["password"] === "pass") {
        state.authenticated = true;
        state.user = new User(payload["username"]);
      } else {
        state.authenticated = false;
        state.user = null;
      }
    }
  },
  actions: {},
  getters: {
    isAuthenticated(state: any): boolean {
      // if(!state.token){

      // }
      return state.authenticated;
    },
    getUser(state: any): User | null {
      return state.user;
    }
  }
};
