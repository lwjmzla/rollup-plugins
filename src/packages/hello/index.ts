import { App } from 'vue'
// @ts-ignore
import Hello from './index.vue'
import './index.scss'
function install(app: App) {
  app.component(Hello.name, Hello)
}

export default install