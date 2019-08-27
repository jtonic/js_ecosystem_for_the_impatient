<template>
  <div>
    <div v-if="loggedin">
      <h2>Logged in</h2>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <h2>Logged out</h2>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loggedin: false,
    }
  },
  methods: {
    login() {
      this.loggedin = true
    },
    logout() {
      this.loggedin = false
    },
  },
}
</script>

<style lang="css" scoped>
</style>