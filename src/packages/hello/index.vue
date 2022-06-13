<template>
  <div>{{msg}}</div>
</template>

<script>

import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'hello',
  setup() {
    const msg =ref('hello')
    return {
      msg
    }
  }
})
</script>

<style lang="scss">
body{
  color: red;
  display: flex;
}

</style>
