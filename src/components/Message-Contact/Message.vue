<template>
  <div class="message">
    <div class="chat-name">
      <span>张三</span>
    </div>
    <div class="chat-message">我是消息通知呀</div>
    <div class="bottom-tip">
      <div class="tip-time">
        <div class="time">2022-01-10</div>
        <span>15:30</span>
      </div>
      <div class="tip-unLine">
        <div class="online">
          <span
            class="before"
            v-if="true"
          />
          <span class="text-green-500">在线</span>
        </div>
      </div>
    </div>
    <div class="bottom-line" />
  </div>
</template>
<script lang="ts" setup>
type Props = {
  item: {
    name: string
    online: boolean
    message: string
    time: string
    unLine: boolean
    isMessage: boolean
    tipNumber: number
  }
}

withDefaults(defineProps<Props>(), {
  item: () => ({
    name: '张三',
    online: false,
    message: '12:45 上线',
    time: '2022-01-10',
    unLine: false,
    isMessage: true,
    tipNumber: 0
  })
})
</script>
<style lang="scss" scoped>
.message {
  .chat-name {
    @apply mb-0.5 flex space-x-10 items-center relative;
    color: var(--home-message-item-color);
    font-size: 14px;
    font-weight: 600;
  }
  .chat-message {
    @apply text-gray-500 mt-1;
    font-size: 12px;
  }
  .chat-group {
    @apply text-gray-500;
    font-size: 14px;
  }
  .bottom-tip {
    @apply text-gray-500 flex justify-between items-center mt-0.5;
    font-size: 10px;
    .tip-time {
      @apply flex  items-center space-x-3;
    }
    .tip-unLine {
      @apply text-gray-500 pr-7;
      font-size: 12px;
      .online {
        @apply text-[12px] text-[#A9ADAD]  relative;
        font-size: 11px;
        .before {
          @apply block w-[5px] h-[5px] bg-green-500 rounded-full absolute top-[5px] right-[-10px];
        }
      }
    }
  }
  .bottom-line {
    @apply block h-[1px] bg-[var(--home-message-item-boder-color)];
    width: calc(100% - 85px);
    content: '';
    position: absolute;
    bottom: 0;
    left: 85px;
  }
}
</style>
