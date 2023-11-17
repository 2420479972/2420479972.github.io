<template>
  <van-checkbox-group
    v-model="checked"
    ref="checkboxRef"
  >
    <Contact
      v-for="(item, index) in source"
      :type="type"
      @click="toggle(index)"
      @mousedown="ontouchstart($event, index)"
      @touchstart="ontouchstart($event, index)"
      @mouseup="endPress"
      @touchend="endPress"
      :key="item.key"
      :item="item"
    >
      <template
        #leftCheckbox
        v-if="checkboxShow && position === 'left'"
      >
        <van-checkbox
          :name="item.key"
          :ref="(el: any) => (checkboxRefs[index] = el)"
          @click.stop
        />
      </template>
      <template
        #rightCheckbox
        v-if="checkboxShow && position === 'right'"
      >
        <van-checkbox
          :name="item.key"
          :ref="(el: any) => (checkboxRefs[index] = el)"
          @click.stop
        />
      </template>
    </Contact>
  </van-checkbox-group>
  <van-back-top>
    <div class="icon-warp">
      <van-icon
        class-prefix="icon"
        name="jiantou_xiangyou"
        color="#E7E7E7"
        :size="25"
      />
    </div>
  </van-back-top>
</template>
<script lang="ts" setup>
import Contact from './index.vue'
import { CheckboxGroupInstance } from 'vant'

type Props = {
  source: any[]
  selected: any[]
  position: 'left' | 'right'
  type: 'message' | 'contact'
  clearCheck: boolean
}

const props = withDefaults(defineProps<Props>(), {
  source: () => [],
  selected: () => [],
  position: 'left',
  type: 'message',
  clearCheck: false
})

const checkboxRef = ref<CheckboxGroupInstance | any>()

const emit = defineEmits(['change', 'update:selected'])

const checkboxShow = ref(false)

const checked = ref([])

const checkboxRefs = ref<HTMLDivElement[] | any[]>([])
const toggle = (index: number) => {
  checkboxRefs.value[index]?.toggle()
}

onBeforeUpdate(() => {
  checkboxRefs.value = []
})

let timer: any = null
const ontouchstart = (e: Event, index: number) => {
  const __run = () => {
    timer = setTimeout(() => {
      toggle(index)
      e.preventDefault()
      checkboxShow.value = true
      nextTick(() => {
        toggle(index)
      })
    }, 800)
  }
  if (e.touches && e.touches?.length === 1 && e.type === 'touchstart') {
    __run()
  } else if (e.type === 'mousedown') {
    __run()
  }
}

const endPress = () => {
  timer && clearTimeout(timer)
}

watch(
  () => checked.value,
  (val) => {
    checked.value.length === 0 && (checkboxShow.value = false)
    const selectedSource = val.map((item) => {
      return props.source.find((sourceItem) => sourceItem.key === item)
    })
    emit('change', selectedSource)
    emit('update:selected', selectedSource)
  }
)

watch(
  () => props.clearCheck,
  (newVal) => {
    newVal && (checked.value = [])
  }
)

defineExpose({
  checkboxRef
})

onBeforeUnmount(() => {
  timer && clearTimeout(timer)
})
</script>
<style lang="scss" scoped>
.icon-warp {
  @apply h-[40px] w-[40px] bg-[#60ACE6] rotate-[-90deg] rounded-full flex items-center justify-center;
}
</style>
