let $el = null;
class Zvue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    $el = options.el
    observe(this.$data);
    update(this.$options.el,this.$data.count)
  }
}

class Observe {
  constructor(obj) {
    this.obj = obj;
    this.walk(obj);
  }
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj,key, obj[key]);
    });
  }
}

function observe(data) {
  if (typeof data !== "object" || data == null) {
    return;
  }
  new Observe(data);
}

function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal;
        update($el,newVal);
      }
    },
  });
}

function update(el,value){
 document.querySelector(el).innerText = value
}