import Hello from './index.vue'
import './index.scss'
function install(Vue) {
  Vue.component(Hello.name, Hello)
}

export default install