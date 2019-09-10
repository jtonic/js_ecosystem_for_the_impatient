<template>
  <div>
    <h1 v-text="product.title"></h1>
    <h2 v-text="product.description"></h2>
    <h3>Availability: {{ product.availableInvetory }}</h3>
    <button @click="addToChart" v-show="product.availableInvetory > 0">Add to chart</button>

    <ul>
      <div class="highlight">Movies</div>
      <br />
      <li v-for="product in sortedProducts" class="textLeftAligned">
        <div>
          <strong>{{ product.name }}</strong>
        </div>
        <span v-for="n in 5">
          <span v-if="isStar(n, product.rating)">&starf;</span>
          <span v-else>&star;</span>
        </span>
        <div>
          <strong>Number of pieces in stock: {{ product.stockAvailability }}</strong>
        </div>
        <span v-html="getStockInfo(product.stockAvailability)"></span>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
import products from '../data/Products.js'

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
      products,
    }
  },
  methods: {
    addToChart() {
      this.product.availableInvetory -= 1
    },
    isStar(i, productRating) {
      return i < productRating
    },
    getStockInfo(stock) {
      if (stock < 1) {
        return 'All out :('
      }
      if (stock < 5) {
        return 'Almost out'
      }
      if (stock < 10) {
        return `Only <strong>${stock}</strong> available`
      }
      return `<strong>${stock}</strong> available`
    },
  },
  computed: {
    sortedProducts() {
      function compare(a, b) {
        let aName = a.name.toLowerCase()
        let bName = b.name.toLowerCase()
        if (aName < bName) {
          return -1
        }
        if (aName > bName) {
          return 1
        }
        return 0
      }

      if (this.products.length > 0) {
        return this.products.sort(compare)
      }
      return []
    },
  },
}
</script>

<style scoped>
.textLeftAligned {
  text-align: left;
}
.star:after {
  content: '\2605';
}
.unstar:after {
  content: '\2606';
}
.highlight {
  color: dodgerblue;
  font-size: 20px;
  font-weight: bold;
}
</style>
