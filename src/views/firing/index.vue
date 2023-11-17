<template>
  <div class="container">
    <van-progress
      :percentage="scheduleRef"
      style="width: 100%"
    />
  </div>
</template>
<script lang="ts" setup>
import { animation } from '@utils/animation'
import { useRouter } from 'vue-router'

const router = useRouter()

const scheduleRef = ref(0)

animation(
  {
    duration: 3000,
    from: 1,
    to: 100
  },
  (value: number) => {
    scheduleRef.value = Math.floor(value)
  }
)

watch(
  () => scheduleRef.value,
  (value: number) => {
    if (value === 100) {
      router.push('/home')
    }
  }
)
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
</style>
