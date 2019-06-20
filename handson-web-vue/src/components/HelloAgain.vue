<template>
  <div>
    <div>Hello for again from Vue world!!!</div>
    <div>Your age is {{age}}</div>
    <button v-on:click="incrementUp">Increment your age;)</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      age: 0
    };
  },
  methods: {
    incrementUp: function() {
      this.age++;
    }
  }
};
</script>

<style scoped>
div {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: tomato;
  margin-top: 10px;
}
</style>
