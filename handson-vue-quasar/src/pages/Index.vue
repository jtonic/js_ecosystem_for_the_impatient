<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    <q-color v-model="hex" inline class="my-picker" />

    <p>The chosen color is: {{ hex }}</p>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      hex: "#FF00FF",
      hexa: "#FF00FFCC",
      rgb: "rgb(0,0,0)",
      rgba: "rgba(255,0,255,0.8)"
    };
  }
};
</script>

<style lang="stylus" scoped>
.my-picker {
  max-width: 250px;
}
</style>

