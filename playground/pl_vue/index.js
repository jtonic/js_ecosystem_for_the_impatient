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

console.log(store.state.message);
store.commit("changeMessage");
console.log(store.state.message);

let vue = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello Vue.JS world!!!"
    };
  },
  template: "<h2>{{ message }}</h2>",
  methods: {
    changeMessage() {
      this.data.message = "Hello Mr. Vue.JS";
    }
  }
});

console.log(`[1] vue data.message: ${vue.message}`);

console.log(`[2] vue data.message: ${vue.$data.message}`);

setTimeout(() => {
  vue.message = "Hello Mr. Vue.JS!!!";
}, 5000);
