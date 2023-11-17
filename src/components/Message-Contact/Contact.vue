<template>
  <div class="message">
    <div class="chat-name">
      <span>xxx群组</span>
    </div>
    <div class="bottom-tip">
      <slot name="line-tip">
        <span
          class="online"
          v-if="false"
          >在线</span
        >
        <div
          class="tip-time"
          v-else
        >
          <div class="time">12:45</div>
          <span>上线</span>
        </div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.message {
  .chat-name {
    @apply mb-0.5 flex space-x-10 items-center relative;
    color: var(--home-message-item-color);
    font-size: 14px;
    font-weight: 600;
  }
  .chat-group {
    @apply text-gray-500;
    font-size: 14px;
  }
  .bottom-tip {
    @apply text-gray-500 flex items-center mt-0.5;
    font-size: 14px;
    .online {
      @apply text-[#3E96D5] flex items-center;
    }
    .tip-time {
      @apply flex  items-center;
      .time {
        @apply mr-2;
      }
    }
  }
}
</style>
