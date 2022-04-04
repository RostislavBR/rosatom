import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    iframeDigitain: false,
    iframeModules: false
  },
  mutations: {
    setIframeDigitain(state, payload) {
      state.iframeDigitain = payload;
    },
    setIframeModules(state, payload) {
      state.iframeModules = payload;
    }
  },
  getters: {
    getIframeDigitain(state) {
      return state.iframeDigitain;
    },
    getIframeModules(state) {
      return state.iframeModules;
    }
  },
  actions: {},
  modules: {},
});
