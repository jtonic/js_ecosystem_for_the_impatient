<template>
  <div id="app">
    <h2>{{ defaultIfEmptyMessage }}</h2>
    <input v-model="message" />
    <!-- <button @click="updateMessage">Modify the message</button> -->
  </div>
</template>

<script>
import store from './store.js'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  computed: {
    message: {
      get() {
        return this.$store.state.message
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      },
    },
    ...mapGetters(['defaultIfEmptyMessage']),
  } /* ,
  methods: mapMutations(['updateMessage']), */,
}

/* setInterval(() => {
  let date = new Date()
  let msg = `Hello vue.js app, at ${date.getMinutes()}:${date.getSeconds()}!!!`
  store.commit('updateMessage', msg)
}, 3000)
 */
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
