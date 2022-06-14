(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script$1 = vue.defineComponent({
      name: 'hello',
      props: {
          province: {
              type: String,
              default: ''
          },
          city: {
              type: String,
              default: ''
          },
          area: {
              type: String,
              default: ''
          }
      },
      setup(props) {
          const msg = vue.ref('hello');
          const state = vue.reactive({
              provinceVal: props.province,
              cityVal: props.city,
              areaVal: props.area,
              provinceList: [],
              cityList: [],
              areaList: [],
              totalData: []
          });
          return Object.assign(Object.assign({}, vue.toRefs(state)), { msg });
      }
  });

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(_ctx.msg), 1 /* TEXT */))
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = "body{color:red;display:-ms-flexbox;display:flex}";
  styleInject(css_248z$2);

  script$1.render = render$1;
  script$1.__file = "src/packages/hello/index.vue";

  var css_248z$1 = "body{-ms-flex-pack:center;justify-content:center}";
  styleInject(css_248z$1);

  // @ts-ignore
  function install$2(app) {
      app.component(script$1.name, script$1);
  }

  var script = vue.defineComponent({
      name: 'test',
      setup() {
          const msg = vue.ref('test');
          return {
              msg
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(_ctx.msg), 1 /* TEXT */))
  }

  var css_248z = "body{color:red;display:-ms-flexbox;display:flex}";
  styleInject(css_248z);

  script.render = render;
  script.__file = "src/packages/test/index.vue";

  // @ts-ignore
  function install$1(app) {
      app.component(script.name, script);
  }

  const str = 'lwj';
  console.log(str);
  function install(app) {
      app.use(install$2);
      app.use(install$1);
  }

  exports.Hello = install$2;
  exports.Test = install$1;
  exports["default"] = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
