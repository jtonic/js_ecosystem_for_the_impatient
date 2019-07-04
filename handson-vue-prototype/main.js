import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import HelloWorld from "./App.vue";

const helloWorldCe = wrap(Vue, HelloWorld);
window.customElements.define("hello-world", helloWorldCe);
