<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import {defineComponent,ref,reactive,toRefs} from 'vue'

interface WithName {
  name: string;
  [key: string]: any;
}
export default defineComponent({
  name: 'hello',
  props: {
    province: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const msg =ref('hello')
    const state = reactive({
      provinceVal: props.province,
      cityVal: props.city,
      areaVal: props.area,
      provinceList: [] as WithName[],
      cityList: [] as WithName[],
      areaList: [] as WithName[],
      totalData: [] as string[],
    })
    return {
      ...toRefs(state),
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
