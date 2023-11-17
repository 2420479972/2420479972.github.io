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
      visible: props.visible,
      ok: null as any
    })
    const showModel = (sure: () => void) => {
      state.visible = true
      state.ok = sure
    }
    const hideModel = () => {
      state.visible = false
    }
    const onOk = async (check: boolean) => {
      if (state.ok) {
        await state.ok(check, hideModel)
      }
    }

    expose({
      showModel,
      hideModel
    })
    return () => (
      <Model
        v-model:visible={state.visible}
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
  const { showModel, hideModel } = vm.component?.exposed as {
    showModel: (type: (sure: boolean, hidden: any) => void) => void
    hideModel: () => void
  }
  return {
    showModel,
    hideModel
  }
}
