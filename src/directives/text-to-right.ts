import { animation } from '@utils/animation/index'
const vTextToRight = {
  mounted(el: HTMLElement, binding: any) {
    const parentEl = el.parentNode as HTMLElement
    parentEl.style.overflow = 'hidden'
    const textArr = binding.value.split('')
    animation(
      {
        duration: 1500,
        from: 0,
        to: textArr.length
      },
      (value) => {
        el.innerHTML = binding.value.substring(0, value)
      }
    )
  }
}
export default {
  install(value: any) {
    value.directive('text-to-right', vTextToRight)
  }
}
