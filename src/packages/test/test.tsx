
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'test',
  setup () {
    const msg = ref('test');
    // return () => h('div', [msg.value]);
    return () => (
      <div>{msg.value}</div>
    );
  }
});
