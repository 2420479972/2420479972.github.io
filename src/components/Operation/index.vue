<template>
  <main>
    <van-button
      v-for="operationItem in operationList"
      :key="operationItem.label"
      @click="operationItem.handleClick"
    >
      {{ $t(operationItem.label) }}
    </van-button>
  </main>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Notify from '@wcjiang/notify'
const i18n = useI18n()

const operationList = [
  {
    label: 'operation.extend',
    handleClick() {
      const notification = new Notification('组件哦', { body: 'mia' })
    }
  },
  {
    label: 'operation.displayAddress',
    handleClick() {
      console.log('推广标')
    }
  },
  {
    label: 'operation.cutLanguage',
    handleClick() {
      i18n.locale.value == 'zh' ? (i18n.locale.value = 'en') : (i18n.locale.value = 'zh')
    }
  },
  {
    label: 'operation.cutNode',
    handleClick() {
      console.log('推广标')
    }
  }
]
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
</style>
