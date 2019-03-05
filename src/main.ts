import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import store from './store';
import './registerServiceWorker';

import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
