// rollup.config.js

import replace from '@rollup/plugin-replace';
import path from 'path'
import dayjs from 'dayjs'

export default {
  // 核心选项
  input: path.resolve(__dirname, './index.js'),     // 必须
  plugins: [
    replace({
      __build_time__: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      preventAssignment: true // !这个是replace的option属性，意思是作为变量被赋值的话，不会被replace；eg: __build_time__ = 111，则不会被replace
    })
  ],
  output: [
    {
      file: path.resolve(__dirname, 'out/bundle.js'),
      format: 'esm'
    },
  ],
};