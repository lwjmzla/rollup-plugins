import { App } from 'vue'
import Hello from "./hello/index"
import Test from "./test/index"

const str: string = 'lwj'
console.log(str)

function install(app: App){
  app.use(Hello)
  app.use(Test)
}

export {    
  Hello,
  Test
}

export default install  //umd