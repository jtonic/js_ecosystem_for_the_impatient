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
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>
