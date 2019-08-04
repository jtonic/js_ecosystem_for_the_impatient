const store = new Vuex.Store({
  state: {
    message: "hello"
  },
  mutations: {
    changeMessage(state) {
      state.message = "bye";
    }
  }
});

let vue = new Vue({
  el: "#app",
  template: "<h2>{{ message }}</h2>",
  store,
  computed: mapState(["message"])
});

console.log(`[1] vue vue.message: ${vue.message}`);
console.log(`[2] vue vue.data.message: ${vue.$data.message}`);
console.log(`[3] vue store.state.message: ${store.state.message}`);

setTimeout(() => {
  console.log("After 4 seconds...");
  store.commit("changeMessage");
  console.log(`[4] vue store.state.message: ${store.state.message}`);
}, 4000);
