import Hello from "./hello/index.js"
import Test from "./test/index.js"
function install(Vue){
  Vue.use(Hello)
  Vue.use(Test)
}

export {    
  Hello,
  Test
}

export default install  //umd