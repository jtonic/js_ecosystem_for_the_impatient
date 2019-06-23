import HelloWorld from "../components/HelloWorld.vue";
import HelloAgain from "../components/HelloAgain.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HelloAgain
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    upByFive: function() {
      this.counter += 5;
    }
  }
};
