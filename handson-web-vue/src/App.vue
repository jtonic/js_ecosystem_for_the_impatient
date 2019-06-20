<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Welcome to Your from Vue.js App!!!"/>
    <hello-again name="Antonel-Ernest Pazargic"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloAgain from "./components/HelloAgain.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HelloAgain
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
