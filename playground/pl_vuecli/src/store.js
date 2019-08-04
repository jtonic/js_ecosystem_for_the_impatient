import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello vue.js app!!!',
  },
  getters: {
    defaultIfEmptyMessage(state) {
      return state.message.length === 0 ? '<empty>' : state.message
    },
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage
    },
  },
  actions: {},
})
