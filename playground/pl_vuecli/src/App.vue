<template>
  <div id="app">{{ message }}</div>
</template>

<script>
import store from './store.js'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      defaultIfEmptyMessage: state => state.getters.defaultIfEmptyMessage,
      message: 'defaultIfEmptyMessage',
    }),
  },
}

setInterval(() => {
  let date = new Date()
  store.state.message = `Hello vue.js app, at ${date.getMinutes()}:${date.getSeconds()}!!!`
}, 3000)
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
