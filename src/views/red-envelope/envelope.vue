<template>
  <div class="envelope-select">
    <template
      v-for="item in list"
      :key="item.key"
    >
      <div
        class="select-content"
        @click="showSelected(item.key, item.options)"
      >
        <div class="select-text">{{ envelopeSource[item.key] || item.text }}</div>
        <div class="select-down">
          <van-icon name="arrow-down" />
        </div>
      </div>
    </template>
    <van-popup
      v-model:show="showPicker"
      position="bottom"
    >
      <van-picker
        :option-height="30"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
const list = [
  {
    text: '红包选择',
    key: 'envelopeSelect',
    options: [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' }
    ]
  },
  {
    text: '红包选择',
    key: 'envelopeSelect',
    options: [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' }
    ]
  }
]

type Props = {
  envelopeSource: {
    [index: string]: any
  }
}

withDefaults(defineProps<Props>(), {
  envelopeSource: () => ({})
})

const showPicker = ref(false)

let selectKey: string = ''

const emit = defineEmits(['update:envelopeSource'])

const onConfirm = (selected: { selectedOptions: any[] }) => {
  emit('update:envelopeSource', {
    [selectKey]: selected.selectedOptions[0]?.text
  })
  showPicker.value = false
}

const columns = ref([])

const showSelected = (key: string, options: any[]) => {
  if (options.length === 0) {
    return
  }
  selectKey = key
  columns.value = options as any
  showPicker.value = true
}
</script>
<style lang="scss" scoped>
.envelope-select {
  @apply w-full h-[11%]  flex justify-between items-center px-[40px];
  .select-content {
    @apply h-[40px] w-full flex justify-between px-3 bg-[#F0F1F6] text-[#88888A] rounded-lg text-[16px] font-[600] ml-5;
    &:first-child {
      @apply ml-[0px];
    }
    .select-text {
      @apply flex-1 flex items-center;
    }
    .select-down {
      @apply w-[5%] flex items-center justify-center;
    }
  }
}
</style>
