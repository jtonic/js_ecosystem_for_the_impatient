import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    color: "#d95252"
  },

  getters: {
    getColor(state) {
      return state.color;
    }
  },

  mutations: {
    doUpdateColor(state, newColor) {
      state.color = newColor;
    }
  },

  actions: {
    updateColor({ commit }) {
      commit("doUpdateColor");
    }
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});

export default Store;
