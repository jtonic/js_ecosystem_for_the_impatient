import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes: routes,
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
