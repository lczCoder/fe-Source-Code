import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import Kstore from './kstore'

Vue.config.productionTip = false

new Vue({
  Kstore,
  render: h => h(App)
}).$mount('#app')
