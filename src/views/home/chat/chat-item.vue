<template>
  <div class="chat-item">
    <div
      class="checkbox"
      v-if="$slots.checkbox"
    >
      <slot name="checkbox" />
    </div>
    <div
      class="chat-portrait"
      :style="{ background: getRandomColor() }"
    >
      <div
        class="tip-num"
        v-if="tipNumber"
      >
        {{ tipNumber }}
      </div>
      张
    </div>
    <div class="chat-content">
      <div class="chat-name">
        <span>张三</span>
      </div>
      <div
        class="chat-message"
        v-if="isMessage"
      >
        我是消息通知呀
      </div>
      <div
        class="chat-group"
        v-else
      >
        <span class="text-[#4192C7]">我是消息通知呀</span>
      </div>
      <div
        class="bottom-tip"
        v-if="isMessage"
      >
        <div class="tip-time">
          <div class="time">2022-01-10</div>
          <span>15:30</span>
        </div>
        <div class="tip-unLine">
          <div class="online">
            <span class="before" />
            近期在线
          </div>
        </div>
      </div>
    </div>
    <div
      class="after"
      v-if="isMessage"
    />
  </div>
</template>
<script lang="ts" setup>
type Props = {
  name: string
  online: boolean
  message: string
  time: string
  unLine: boolean
  isMessage: boolean
  tipNumber: number
}

const props = withDefaults(defineProps<Props>(), {
  name: '张三',
  online: false,
  message: '12:45 上线',
  time: '2022-01-10',
  unLine: false,
  isMessage: true
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>
<style lang="scss" scoped>
.chat-item {
  @apply h-[80px] w-full flex pl-4 pr-4 items-center pt-1 relative;
  .checkbox {
    @apply mr-2;
  }
  .chat-portrait {
    @apply h-[60px] w-[60px] rounded-full  text-center leading-[60px] text-white relative;
    .tip-num {
      @apply absolute  text-white  right-[-5px] top-[-7px] bg-[#E90000] text-[12px] rounded-full  w-[25px] h-[25px] flex items-center justify-center;
    }
  }
  .after {
    @apply block h-[1px] bg-[var(--home-message-item-boder-color)];
    width: calc(100% - 70px);
    content: '';
    position: absolute;
    bottom: 0;
    left: 70px;
  }
  .chat-content {
    @apply h-full flex-1  ml-3 flex flex-col justify-center;
    .chat-name {
      @apply mb-0.5 flex space-x-10 items-center relative;
      color: var(--home-message-item-color);
      font-size: 14px;
      font-weight: 600;
    }
    .chat-message {
      @apply text-gray-500;
      font-size: 12px;
    }
    .chat-group {
      @apply text-gray-500;
      font-size: 14px;
    }
    .bottom-tip {
      @apply text-gray-500 flex justify-between items-center;
      font-size: 10px;
      .tip-time {
        @apply flex  items-center;
        .time {
          @apply mr-5;
        }
      }
      .tip-unLine {
        @apply text-gray-500 pr-3;
        font-size: 12px;
        .online {
          @apply text-[12px] text-[#A9ADAD] leading-3 relative;
          font-size: 11px;
          .before {
            @apply block w-[5px] h-[5px] bg-[#A9ADAD] rounded-full absolute top-[5px] right-[-10px];
          }
        }
      }
    }
  }
}
</style>
