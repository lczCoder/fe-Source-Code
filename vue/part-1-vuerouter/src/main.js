/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import krouter from "./k-router";


Vue.config.productionTip = false;

new Vue({
  router:krouter,
  render: (h) => h(App),
}).$mount("#app");
