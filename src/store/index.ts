import Vue from 'vue';
import Vuex from 'vuex';

import AuthStoreModule from '@/store/auth.module';
import ProjectsStoreModule from '@/store/projects.module';
import AppsStoreModule from '@/store/apps.module';
import ContainersStoreModule from '@/store/containers.module';
import ImagesStoreModule from '@/store/images.module';
import NetworksStoreModule from '@/store/networks.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthStoreModule,
    projects: ProjectsStoreModule,
    apps: AppsStoreModule,
    containers: ContainersStoreModule,
    images: ImagesStoreModule,
    networks: NetworksStoreModule,
  },
  state: {
    backendUrl: 'http://localhost:8000/api',
  },
  mutations: {

  },
  actions: {

  },
});
