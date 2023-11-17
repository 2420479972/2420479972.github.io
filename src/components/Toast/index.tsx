import ToastMask from './Toast.vue'
import { createVNode, render } from 'vue'
type Options = {
  visible: boolean
  options: {
    text: string
    title: string
    content: string
    onOk: (content: string) => void
  }
}
const ToastMaskContainer = defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({}) as Options
    }
  },
  setup(props, { expose }) {
    const state = reactive<Options>({
      visible: false,
      options: props.options
    } as Options)

    const showModel = (options: any) => {
      state.options = options
      state.visible = true
    }

    const hideModel = () => {
      state.visible = false
    }
    const onOk = () => {
      state.options.onOk && state.options.onOk(state.options.content)
      hideModel()
    }
    expose({
      showModel,
      hideModel
    })

    return () => (
      <ToastMask
        onOk={onOk}
        v-model:visible={state.visible}
        options={state.options}
      ></ToastMask>
    )
  }
})

let vm
export const useToast = (options: Options['options']) => {
  const div = document.createElement('div')
  vm = createVNode(ToastMaskContainer, { options }) // 将组件渲染成虚拟节点
  render(vm, div) // 将虚拟节点渲染到真实节点上
  document.body.appendChild(div)
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { showModel } = vm.component?.exposed as { showModel: (options: any) => void }
  showModel(options)
}
