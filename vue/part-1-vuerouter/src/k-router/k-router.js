let Vue;
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// 手写建立的router插件
class VueRouter1 {
  constructor(options) {
    // this.current = window.location.hash.slice(1) || "/";
    Vue.util.defineReactive(this,'current',window.location.hash.slice(1))
    this.options = options;
    // 监听hash变化
    window.addEventListener("load", () => {
      this.current = window.location.hash.slice(1); //获取当前hash地址
    });
    // 页面load加载完成
    window.addEventListener("hashchange", () => {
      this.current = window.location.hash.slice(1); //获取当前hash地址
    });
  }
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
  Vue.component("router-link", {
    //   h函数render函数调用时候，框架传入createElement 返回vdom
    render(h) {
      //   return <a href={'#'+this.to}>{this.$slots.default}</a> 不推荐写法 jsx
      return h(
        "a", //标签
        {
          //标签属性
          attrs: {
            href: "#" + this.$attrs.to,
          },
        },
        this.$slots.default //标签内容
      );
    },
  });
  Vue.component("router-view", {
    //   render 函数如果放置组件配置，则会直接渲染组件
    render(h) {
      // 1、获取当前url中的hash值
      // 2、遍历路由表，找到对应的组件进行渲染
      let component = null;
      const route = this.$router.options.routes.find((route) => {
        return route.path == this.$router.current;
      });
      if (route) {
        component = route.component;
      }
      return h(component);
    },
  });
};

export default VueRouter1;

/**
 * bug：
 * 1、路由切换 页面无法改变
 * 2、是因为current 不是一个响应式数据，不会触发render函数重新进行渲染导致
 */

/**
 * 解决办法
 * 1、必须把current设置成为一个响应式数据
 * 2、使用 Vue.set()方法 无法使用 api调用不允许 
 * 3、使用 Vue.util.defineReactive() 方法来进行响应式数据的挂载
 */

/**
 * ❗注意事项:
 * 1、学习vue.util.defineReactive有关的知识。
 * 2、学习vue render渲染函数的相关api配置
 */
