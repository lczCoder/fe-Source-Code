import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cout: 0,
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
