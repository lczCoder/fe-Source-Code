let Vue;

class Store {
    constructor(options){ //构造函数传入一个配置对象 state action mutations getter modules
        /**
         * 创建state属性 并暴露出去
         */
        this.$options = options;
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
            data(){
                return {
                    $$state:options.state,
                }
            }
        }) 
    }
    get state (){
        return this._vm._data.$$state
        // console.log(this._vm._data.$$state);
    }
    set state (v){
        console.error('请不要直接修改state的状态');
    }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    //   在组件创建前，在vue身上挂在store
    beforeCreate() {
        if(this.$options.store){
            Vue.prototype.$store = this.$options.store
        }
    },
  });
}

export default{ Store, install };
