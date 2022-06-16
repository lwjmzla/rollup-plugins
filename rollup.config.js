import serve from 'rollup-plugin-serve'; // !这样主要实现页面的热更新
import livereload from 'rollup-plugin-livereload';
const path = require('path');
const { babel, getBabelOutputPlugin } = require('@rollup/plugin-babel'); // es6解析
// const json = require("@rollup/plugin-json"); // json解析
const vuePlugin = require('rollup-plugin-vue'); // vue 解析
const typescript = require('rollup-plugin-typescript2'); // ts打包
const postcss = require('rollup-plugin-postcss'); // css 打包
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer'); // 浏览器前缀
// const {terser} = require('rollup-plugin-terser'); // 代码压缩
// const alias = require('rollup-plugin-alias');
const jsx = require('acorn-jsx');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve'); // !使用了nodeResolve插件，就能访问'./answer/index.js'，其实就是写文件名称不规范问题。

const external = [
  // 外部库， 使用'umd'文件时需要先引入这个外部库
  'vue' // !标记为通过script引入，打包的时候不用打包 这个模块
];

const globals = {
  vue: 'Vue' // !意思是import {defineComponent,ref} from 'vue'的vue模块是从外部提供的Vue(挂载在window上的变量)获取
};
// !rollup的external+globals  才等于  webpack的externals: { vue : 'Vue'}
const extensions = ['.ts', '.js', '.tsx'];
export default {
  input: './src/packages/index.ts',
  external,
  output: [
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib',
      globals
    },
    // {
    //   file: './dist/my-lib-iife.js',
    //   format: 'iife',
    //   name: 'myLib',
    //   globals
    // },
    {
      file: './dist/my-lib-es.js',
      format: 'es'
    },
    {
      file: './dist/my-lib-cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    // terser(), // 代码压缩
    // json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/type'
        }
      },
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    // !多了extensions和babelHelpers: 'runtime'，可以把tsx文件进行转换es5的，但造成多了很多代码，可以直接被html执行
    // !tsx语法不管，因为一般vue-cli项目，引入组件库，配了babel.config.js则可解决vue jsx问题
    babel({
      exclude: 'node_modules/**'
      // extensions,
      // babelHelpers: 'runtime'
    }),
    // !配了这个，jsx被解析了，但是umd文件不能直接html饮用。
    getBabelOutputPlugin({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@vue/babel-plugin-jsx'
      ],
      allowAllFormats: true
    }),
    vuePlugin({
      css: true,
      target: 'browser',
      compileTemplate: true,
      preprocessStyles: true
    }),
    postcss({
      extensions: ['.css', '.sass'],
      plugins: [
        cssnano,
        autoprefixer({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
      ]
    }),
    // alias({
    //   'vue': require.resolve('vue/dist/vue.esm-bundler.js')
    // }),
    nodeResolve({ mainFields: ['module', 'main', 'browser'] }),
    commonjs({ sourceMap: true }),
    serve({
      contentBase: '', // 服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
      port: 8020 // 端口号，默认10001
    }),
    livereload('dist') // watch dist目录，当目录中的文件发生变化时，刷新页面
  ],
  // !jsx插件是让acornjs解析器能认识jsx语法，经过rollup打包后展示的还是jsx语法，而还需要babel修改jsx结构成为普通js语法。
  acornInjectPlugins: [jsx()]
};
