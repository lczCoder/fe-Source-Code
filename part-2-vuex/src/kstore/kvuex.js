let Vue;

class Store {
  constructor(options) {
    //构造函数传入一个配置对象 state action mutations getter modules
    /**
     * 创建state属性 并暴露出去
     */
    this.options = options;
    this._actions = options.actions;
    this._mutations = options.mutations;
    this._getter = options.getter;

    this.getters = {};
    Object.keys(this._getter).forEach((key) => {
      let that = this;
      Object.defineProperty(this.getters, key, {
        get: function() {
          return options.getter[key](that.state);
        },
      });
    });

    //对传入的state选项做响应式处理
    // 第一种方法
    // Vue.util.defineReactive(this,'state',this.$options.state) 不好的方法，用户可以直接访问state
    // 第二种方法
    // this.state = new Vue({
    //     data(){
    //         return options.state
    //     }
    // })
    // TODO: 推荐方法
    this._vm = new Vue({
      data() {
        return {
          // 如果只希望vue相应数据 而不进行代理，通过$$或者 _ 的方法进行编写
          $$state: options.state,
        };
      },
    });
    // 绑定上下文， 防止this指向丢失
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  get state() {
    return this._vm._data.$$state;
  }
  set state(v) {
    console.error("请不要直接修改state的状态");
  }

  // 自定义方法
  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      console.error(`${type},该mutations方法不存在`);
      return;
    }
    entry(this.state, payload);
  }
  dispatch(type, payload) {
    const entry = this._actions[type];
    if (!entry) {
      console.error(`${type},该actions方法不存在`);
      return;
    }
    entry(this, payload);
  }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    //   在组件创建前，在vue身上挂在store
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { Store, install };

/**
 * 1、通过$store.getter 访问一个属性
 * 2、调用这个属性的对象函数，返回结果
 */
