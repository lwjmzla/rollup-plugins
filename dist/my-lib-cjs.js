
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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

function render(_ctx, _cache, $props, $setup, $data, $options) {
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

var css_248z$3 = "body{color:red;display:-ms-flexbox;display:flex}";
styleInject(css_248z$3);

script$1.render = render;
script$1.__file = "src/packages/hello/index.vue";

var css_248z$2 = "body{-ms-flex-pack:center;justify-content:center}";
styleInject(css_248z$2);

// @ts-ignore
function install$2(app) {
    app.component(script$1.name, script$1);
}

var script = vue.defineComponent({
    name: 'test',
    setup() {
        const msg = vue.ref('test');
        // return () => h('div', [msg.value]);
        // !vue文件的jsx方式，没有被babel做转换奇怪，但.tsx文件就会被转换了。配置：rollup.config.js  babel extensions
        return () => (<div>{msg.value}</div>);
    }
});

var css_248z$1 = "body{color:red;display:-ms-flexbox;display:flex}";
styleInject(css_248z$1);

script.__file = "src/packages/test/index.vue";

var css_248z = "body{-ms-flex-align:center;align-items:center}";
styleInject(css_248z);

// @ts-ignore
function install$1(app) {
    app.component(script.name, script);
}

// const str = 'lwj';
// console.log(str);
function install(app) {
    app.use(install$2);
    app.use(install$1);
}

exports.Hello = install$2;
exports.Test = install$1;
exports["default"] = install;
