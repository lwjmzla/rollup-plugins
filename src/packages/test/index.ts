import { App } from 'vue';
// @ts-ignore
import Test from './index.vue';
import './index.scss';
function install (app: App) {
  app.component(Test.name, Test);
}

export default install;
