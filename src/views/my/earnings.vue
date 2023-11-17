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
    label: '我的团队',
    key: '123'
  },
  {
    label: '触发地址',
    key: '123'
  },
  {
    label: '平台扣税',
    key: '123'
  },
  {
    label: '代数奖励',
    key: '123'
  },
  {
    label: '代理奖励',
    key: '123'
  },
  {
    label: '代理分红',
    key: '123'
  },
  {
    label: '时间',
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
  },
  {
    label: '累计奖励',
    key: '123',
    labelStyle: {
      color: '#000',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    valueStyle: {
      color: '#E70000',
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
