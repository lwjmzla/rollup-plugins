import Hello from "./hello/index.js"
import Test from "./test/index.js"
function install(app){
  app.use(Hello)
  app.use(Test)
}

export {    
  Hello,
  Test
}

export default install  //umd