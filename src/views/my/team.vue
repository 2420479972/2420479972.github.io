<template>
  <div class="warp">
    <Card
      :config="list"
      v-for="item in 12"
    />
  </div>
</template>
<script lang="ts" setup>
import Card from './card.vue'

const list = [
  {
    label: '参与地址',
    key: '123'
  },
  {
    label: '代数详情',
    key: '123'
  },
  {
    label: '是否代理',
    key: '123'
  },
  {
    label: '累计地址',
    key: '123'
  },
  {
    label: '触发时间',
    key: '123',
    labelStyle: {
      color: '#A0A0A0',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    valueStyle: {
      color: '#A0A0A0',
      fontSize: '12px',
      fontWeight: 'bold'
    }
  }
]
</script>
<style lang="scss" scoped>
.warp {
  @apply px-[15px];
}
</style>
