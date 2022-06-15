var _vue = _interopRequireWildcard(require("vue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (l, r) {
  if (!l || l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(self.document);

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) : typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}, global.Vue));
})(this, function (exports, vue) {
  'use strict';

  var script$1 = vue.defineComponent({
    name: 'hello',
    props: {
      province: {
        type: String,
        "default": ''
      },
      city: {
        type: String,
        "default": ''
      },
      area: {
        type: String,
        "default": ''
      }
    },
    setup: function setup(props) {
      var msg = vue.ref('hello');
      var state = vue.reactive({
        provinceVal: props.province,
        cityVal: props.city,
        areaVal: props.area,
        provinceList: [],
        cityList: [],
        areaList: [],
        totalData: []
      });
      return Object.assign(Object.assign({}, vue.toRefs(state)), {
        msg: msg
      });
    }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(_ctx.msg), 1
    /* TEXT */
    );
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

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

  var css_248z$3 = "body{color:red;display:-ms-flexbox;display:flex}";
  styleInject(css_248z$3);
  script$1.render = render;
  script$1.__file = "src/packages/hello/index.vue";
  var css_248z$2 = "body{-ms-flex-pack:center;justify-content:center}";
  styleInject(css_248z$2); // @ts-ignore

  function install$2(app) {
    app.component(script$1.name, script$1);
  }

  var script = vue.defineComponent({
    name: 'test',
    setup: function setup() {
      var msg = vue.ref('test'); // return () => h('div', [msg.value]);

      return function () {
        return _vue.createVNode("div", null, [msg.value]);
      };
    }
  });
  var css_248z$1 = "body{color:red;display:-ms-flexbox;display:flex}";
  styleInject(css_248z$1);
  script.__file = "src/packages/test/index.vue";
  var css_248z = "body{-ms-flex-align:center;align-items:center}";
  styleInject(css_248z); // @ts-ignore

  function install$1(app) {
    app.component(script.name, script);
  } // const str = 'lwj';
  // console.log(str);


  function install(app) {
    app.use(install$2);
    app.use(install$1);
  }

  exports.Hello = install$2;
  exports.Test = install$1;
  exports["default"] = install;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
