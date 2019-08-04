import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello vue.js app!!!',
  },
  getters: {
    defaultIfEmptyMessage: state =>
      state.message.lenght === 0 ? 'No message' : state.message,
  },
  mutations: {
    modifyMessage(state, newMessage) {
      state.message = newMessage
    },
  },
  actions: {},
})
