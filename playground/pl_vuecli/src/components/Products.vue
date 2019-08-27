<template>
  <div>
    <h1 v-text="product.title"></h1>
    <h2 v-text="product.description"></h2>
    <h3>Availability: {{ product.availableInvetory }}</h3>
    <button @click="addToChart" v-show="product.availableInvetory > 0">
      Add to chart
    </button>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      product: {
        id: 1,
        title: 'Robinson Crusoe',
        description: 'A story about a castaway',
        price: 12,
        availableInvetory: 3,
      },
    }
  },
  methods: {
    addToChart() {
      this.product.availableInvetory -= 1
    },
  },
}
</script>

<style scoped></style>
