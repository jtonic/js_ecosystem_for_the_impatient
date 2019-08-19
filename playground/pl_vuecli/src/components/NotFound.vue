<template>
  <div>
    <h1>Page not found</h1>
    <h2>You are looking for {{ $route.params.pathMatch }}</h2>
    <button @click="home">Home</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    home() {
      this.$router.push('/')
    },
  },
}
</script>
