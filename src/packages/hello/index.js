import Hello from './index.vue'
import './index.scss'
function install(app) {
  app.component(Hello.name, Hello)
}

export default install