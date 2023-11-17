<template>
  <div class="header bg-amber-100 h-[80px] w-full">
    <Header />
  </div>
  <div class="content space-y-.5">
    <van-swipe-cell :before-close="beforeClose">
      <Message
        type="message"
        :item="{ unread: 20 }"
        @click="handleMessage"
      />
      <template #right>
        <div
          class="button h-full w-full flex items-center justify-center px-3.5 bg-[#EE0A25] text-white active:bg-red-300"
        >
          删除
        </div>
      </template>
    </van-swipe-cell>
  </div>
</template>
<script lang="ts" setup>
import Message from '@components/Message-Contact/index.vue'
import { useToast } from '@/components/Toast/index.tsx'
import { userModel } from '@/components/Model/index.tsx'

const { showModel } = userModel()

const beforeClose = async () => {
  showModel((sure: boolean, hidden: () => void) => {
    console.log(sure)
    hidden()
  })
  return true
}

const handleMessage = () => {
  useToast({
    text: '确定',
    title: '聊天充值提醒',
    content: '余额不足，请前往充值！',
    onOk: () => {
      console.log('ok')
    }
  })
}
</script>
<style lang="scss" scoped>
.content {
  height: calc(100% - 80px);
  width: 100%;
  overflow: auto;
}

header {
  @apply w-[50vw] h-[20vh] bg-[#fff] rounded-xl;
}
</style>
