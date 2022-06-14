import { App } from 'vue';
// @ts-ignore
import Test from './test.tsx';
import './index.scss';
function install (app: App) {
  app.component(Test.name, Test);
}

export default install;
