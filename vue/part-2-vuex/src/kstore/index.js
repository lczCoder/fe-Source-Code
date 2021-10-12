import Vue from "vue";
// import Vuex from "vuex";
import Vuex from "./kvuex";

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
    //   ctx 上下文 解构赋值
    add({ commit }) {
      let timer = setTimeout(() => {
        commit("asyncAdd");
        clearTimeout(timer);
      }, 1000);
    },
  },
  getter: {
    doubleCout(state) {
      return state.cout * 2;
    },
    threeCout(state){
      return state.cout * 3
    }
  },
  modules: {},
});
