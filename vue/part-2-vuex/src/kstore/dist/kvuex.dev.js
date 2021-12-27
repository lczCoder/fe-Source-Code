"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vue;

var Store =
/*#__PURE__*/
function () {
  function Store(options) {
    var _this = this;

    _classCallCheck(this, Store);

    //构造函数传入一个配置对象 state action mutations getter modules

    /**
     * 创建state属性 并暴露出去
     */
    this.options = options;
    this._actions = options.actions;
    this._mutations = options.mutations;
    this._getter = options.getter;
    this.getters = {};
    Object.keys(this._getter).forEach(function (key) {
      var that = _this;
      Object.defineProperty(_this.getters, key, {
        get: function get() {
          return options.getter[key](that.state);
        }
      });
    }); //对传入的state选项做响应式处理
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
      data: function data() {
        return {
          // 如果只希望vue响应数据 而不进行代理，通过$$或者 _ 的方法进行编写
          $$state: options.state
        };
      }
    }); // 绑定上下文， 防止this指向丢失

    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  _createClass(Store, [{
    key: "commit",
    // 自定义方法
    value: function commit(type, payload) {
      var entry = this._mutations[type];

      if (!entry) {
        console.error("".concat(type, ",\u8BE5mutations\u65B9\u6CD5\u4E0D\u5B58\u5728"));
        return;
      }

      entry(this.state, payload);
    }
  }, {
    key: "dispatch",
    value: function dispatch(type, payload) {
      var entry = this._actions[type];

      if (!entry) {
        console.error("".concat(type, ",\u8BE5actions\u65B9\u6CD5\u4E0D\u5B58\u5728"));
        return;
      }

      entry(this, payload);
    }
  }, {
    key: "state",
    get: function get() {
      return this._vm._data.$$state;
    },
    set: function set(v) {
      console.error("请不要直接修改state的状态");
    }
  }]);

  return Store;
}();

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    //   在组件创建前，在vue身上挂在store
    beforeCreate: function beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

var _default = {
  Store: Store,
  install: install
};
/**
 * 1、通过$store.getter 访问一个属性
 * 2、调用这个属性的对象函数，返回结果
 * 改进点，
 * 需要把computed 和 getters 进行一个高阶函数的封装 
 */

exports["default"] = _default;