import Vue from 'vue';
import Vuex from 'vuex';
import { destroyHook } from '^/test/DestroyedHook/store';
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main',{
  // other options...
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment () {
      console.log('increment-------------------------------')
      this.count++;
    }
  }
})

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
