import { defineComponent, ref, openBlock, createElementBlock, toDisplayString } from 'vue';

var script$1 = defineComponent({
  name: 'hello',
  setup() {
    const msg =ref('hello');
    return {
      msg
    }
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, toDisplayString(_ctx.msg), 1 /* TEXT */))
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

function install$2(app) {
  app.component(script$1.name, script$1);
}

var script = defineComponent({
  name: 'test',
  setup() {
    const msg =ref('test');
    return {
      msg
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, toDisplayString(_ctx.msg), 1 /* TEXT */))
}

var css_248z = "body{color:red;display:-ms-flexbox;display:flex}";
styleInject(css_248z);

script.render = render;
script.__file = "src/packages/test/index.vue";

function install$1(app) {
  app.component(script.name, script);
}

function install(app) {
  app.use(install$2);
  app.use(install$1);
}
 //umd

export { install$2 as Hello, install$1 as Test, install as default };
