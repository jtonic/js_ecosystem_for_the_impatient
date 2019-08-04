# Vue

## Vue simple samples

[app: flavour 1](https://jsfiddle.net/ea1utcp8/)

[app: flavour 2](https://jsfiddle.net/jtonic/5pxyhLoj/7/)

## Howto

- How to access vue data properties through vue instance:

```js
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

setTimeout(() => {
  vue.message = "Hello Mr. Vue.JS!!!";
}, 5000);
```

## Links

- [vue api](https://vuejs.org/v2/api/)
- [vue instance properties](https://vuejs.org/v2/api/#Instance-Properties)
