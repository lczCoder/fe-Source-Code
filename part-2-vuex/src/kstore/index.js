import Vue from "vue";
// import Vuex from "vuex";
import Vuex from './kvuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cout: 10,
    asyncCout: 0,
  },
  mutations: {
    add(state) {
      state.cout++;
    },
    asyncAdd(state) {
      state.asyncCout++;
    },
  },
  actions: {
    add(ctx) {
      let timer = setTimeout(() => {
        ctx.commit("asyncAdd");
        clearTimeout(timer);
      },1000);
    },
  },
  modules: {},
});
