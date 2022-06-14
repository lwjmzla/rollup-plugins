<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">

import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'test',
  setup() {
    const msg =ref('test')
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
