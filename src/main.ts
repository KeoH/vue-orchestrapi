import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import store from './store';
import './registerServiceWorker';

import Vuelidate from 'vuelidate';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es'


Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
