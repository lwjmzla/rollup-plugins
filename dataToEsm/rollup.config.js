// rollup.config.js
import path from 'path';
import { dataToEsm } from '@rollup/pluginutils';
// const json = require('@rollup/plugin-json'); // json解析

function rollupPluginJson () {
  return {
    name: 'parse-json',
    buildStart (options) {
      console.log('--buildStart--');
    },
    load (id) { // !id其实就是文件路径D:\web\rollup-plugins\package.json
      console.log('--load--', id);
      return null; // 不转换
    },
    transform (code, id) {
      if (id.slice(-5) !== '.json') return null;
      console.log('--transform code--', code);
      console.log('--transform id--', id);
      const parsed = JSON.parse(code);
      const transformCode = dataToEsm(parsed); // !把对象里的每个key,value都export
      console.log(transformCode);
      return {
        code: transformCode,
        map: null // !SourceMap
      };
    },
    buildEnd (error) {
      console.log('--buildEnd--', error);
    }
  };
}

export default {
  // 核心选项
  input: path.resolve(__dirname, './index.js'), // 必须
  plugins: [
    // json(),
    rollupPluginJson()
  ],
  output: [
    {
      file: path.resolve(__dirname, 'out/bundle.js'),
      format: 'esm'
    }
  ]
};
