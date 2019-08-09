<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    <q-color v-model="color" inline class="my-picker" />

    <p>The chosen color is: {{ color }}</p>
  </q-page>
</template>

<style></style>

<script>
import store from "../store/store.js";

export default {
  name: "PageIndex",
  computed: {
    color: {
      get() {
        return store.getters.getColor;
      },
      set(value) {
        store.commit("doUpdateColor", value);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-picker {
  max-width: 250px;
}
</style>

