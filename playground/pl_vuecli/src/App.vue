<template>
  <div id="app">{{ message }}</div>
</template>

<script>
import store from './store.js'

export default {
  name: 'app',
  computed: {
    message() {
      return store.state.message
    },
  },
}

setTimeout(() => {
  store.state.message = 'Hello vue.js app, even after 5 seconds!!!'
}, 5000)
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
