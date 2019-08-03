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

console.log(`vue data.message: ${vue.message}`);
setTimeout(() => {
  vue.message = "Hello Mr. Vue.JS!!!";
}, 5000);
