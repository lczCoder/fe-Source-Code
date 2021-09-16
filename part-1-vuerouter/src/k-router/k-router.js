let Vue;
// 手写建立的router插件
class VueRouter1 {
  constructor() {}
}

VueRouter1.install = function (_Vue) {
  //vue构造函数作为参数传入
  Vue = _Vue;
  /**
   * 1、注册$router,在全局使用
   * 2、注册2个全局组件,router-link, router-view
   */
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  //   定义组件
  Vue.component('router-link',{
     render(h){
         console.log('this.slot',this.$slots);
         return h('a',this.$slots.default)
     }
  });
  Vue.component('router-view',{
    render(h){
        return h('div','router-view')
    }
})
};

export default VueRouter1;
