<template>
  <div>
    <h1>Users</h1>
    <h2 v-text="users"></h2>
  </div>
</template>

<script>
export default {
  name: 'Users',
  computed: {
    users() {
      return `User id: ${this.$route.params.id}`
    },
  },
}
</script>
