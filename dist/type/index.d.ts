import { App } from 'vue';
import Hello from "./hello/index";
import Test from "./test/index";
declare function install(app: App): void;
export { Hello, Test };
export default install;
