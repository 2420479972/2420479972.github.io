import { createVNode, defineComponent, render } from 'vue'
import Model from './Model.vue'

const __Model = defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { expose }) {
    const state = reactive({
      visible: props.visible
    })
    const showModel = (sure: () => void) => {
      state.visible = true
      state.ok = sure
    }
    const hideModel = () => {
      state.visible = false
    }
    const onOk = (check: boolean) => {
      state.ok && state.ok(check, hideModel)
    }

    expose({
      showModel
    })
    return () => (
      <Model
        v-model:visible={state.visible}
        on
        onOk={onOk}
      ></Model>
    )
  }
})

let vm = null
export const userModel = () => {
  const div = document.createElement('div')
  vm = createVNode(__Model) // 将组件渲染成虚拟节点
  render(vm, div) // 将虚拟节点渲染到真实节点上
  document.body.appendChild(div)
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { showModel } = vm.component?.exposed as { showModel: (sure: () => void) => void }
  return {
    showModel
  }
}
