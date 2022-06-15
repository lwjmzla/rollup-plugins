import { createVNode as _createVNode } from "vue";

(function (l, r) {
  if (!l || l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(self.document);

import { defineComponent, ref, reactive, toRefs, openBlock, createElementBlock, toDisplayString } from 'vue';
var script$1 = defineComponent({
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
    var msg = ref('hello');
    var state = reactive({
      provinceVal: props.province,
      cityVal: props.city,
      areaVal: props.area,
      provinceList: [],
      cityList: [],
      areaList: [],
      totalData: []
    });
    return Object.assign(Object.assign({}, toRefs(state)), {
      msg: msg
    });
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.msg), 1
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

var script = defineComponent({
  name: 'test',
  setup: function setup() {
    var msg = ref('test'); // return () => h('div', [msg.value]);

    return function () {
      return _createVNode("div", null, [msg.value]);
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

export { install$2 as Hello, install$1 as Test, install as default };
