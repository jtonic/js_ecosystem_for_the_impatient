<template>
  <div id="app">
    <h2>{{ defaultIfEmptyMessage }}</h2>
    <input v-model="message" />
    <router-link to="/">Home</router-link>
    <router-link to="/greeting">Greeting</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/checkout">Checkout</router-link>
    <router-view />
    <!-- <button @click="updateMessage">Modify the message</button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  },
}
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
