import Vue from 'vue';
import Vuex from 'vuex';
import { destroyHook } from '@/test/DestroyedHook/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeCount: 0,
  },
  mutations: {},
  actions: {},
  modules: {
    DestroyedHook: destroyHook,
  },
});
