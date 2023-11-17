<template>
  <van-tabbar
    v-model="active"
    safe-area-inset-bottom
    :fixed="false"
    active-color="rgb(53,111,240)"
  >
    <van-tabbar-item
      v-for="footerItem in footerOperation"
      :key="footerItem.text"
      :name="footerItem.path"
      style="background-color: var(--home-menu-bg)"
    >
      <template #icon="data">
        <van-icon
          :name="footerItem.icon"
          :size="25"
          :color="data.active ? 'rgb(53,111,240)' : 'rgb(158, 163, 179)'"
        />
      </template>
      {{ $t(footerItem.text) }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const active = ref('/home/chat')
watchEffect(() => {
  active.value = route.path
})

watch(
  () => active.value,
  (newVal) => {
    router.push(newVal)
  }
)

const footerOperation = [
  {
    text: 'footerOperation.chat',
    icon: 'comment-o',
    path: '/home/chat'
  },
  {
    text: 'footerOperation.find',
    icon: 'coupon-o'
  },
  {
    text: 'footerOperation.addressBook',
    icon: 'friends-o',
    path: '/contacts'
  },
  {
    text: 'footerOperation.me',
    icon: 'contact-o',
    path: '/my'
  }
]
</script>
<style lang="scss" scoped>
:deep(.van-tabbar) {
}
</style>
