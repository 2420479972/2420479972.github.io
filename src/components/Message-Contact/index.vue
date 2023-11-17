<template>
  <div class="message-contact">
    <div
      class="checkbox"
      v-if="$slots.leftCheckbox"
    >
      <slot name="leftCheckbox" />
    </div>
    <slot name="portrait">
      <van-badge
        :content="item.unread"
        :show-zero="false"
        :offset="[-10, 5]"
      >
        <div
          class="chat-portrait"
          :style="{ background: getRandomColor() }"
        >
          张
        </div>
      </van-badge>
    </slot>

    <div class="chat-content">
      <slot>
        <Contact v-if="type === 'contact'">
          <template #line-tip>
            <slot name="line-tip" />
          </template>
        </Contact>
        <Message v-else />
      </slot>
    </div>
    <div
      class="checkbox"
      v-if="$slots.rightCheckbox"
    >
      <slot name="rightCheckbox" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Message from './Message.vue'
import Contact from './Contact.vue'

type Props = {
  type: 'message' | 'contact'
  item: {
    name: string
    unread: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  type: 'message',
  item: () => ({
    name: '张三',
    unread: 0
  })
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
.message-contact {
  @apply min-h-[80px] w-full flex pl-4 pr-4 items-center pt-1 relative py-1.5;
  .checkbox {
    @apply mr-4;
  }
  .chat-portrait {
    @apply h-[60px] w-[60px] rounded-full  text-center leading-[60px] text-white relative;
  }

  .chat-content {
    @apply h-full flex-1  ml-3 flex flex-col justify-center;
  }
}
</style>
