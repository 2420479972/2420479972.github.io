<template>
  <van-overlay
    :show="visible"
    z-index="1000"
    @click.self="emit('update:visible', false)"
  >
    <div class="toast">
      <main>
        <div class="title-warp">
          <div class="title">{{ options.title }}</div>
        </div>
        <div class="content-warp">
          <div class="content">{{ options.content }}</div>
        </div>
        <div
          class="button-warp"
          @click="emit('ok')"
        >
          <div class="button">{{ options.text }}</div>
        </div>
      </main>
      <div class="close">
        <van-icon
          @click="emit('update:visible', false)"
          class-prefix="icon"
          name="guanbi"
          size="20"
          color="#fff"
        />
      </div>
    </div>
  </van-overlay>
</template>
<script lang="ts" setup>
type Props = {
  visible: boolean
  options: {
    text: string
    title: string
    content: string
  }
}

const emit = defineEmits(['update:visible', 'ok'])

withDefaults(defineProps<Props>(), {
  visible: false,
  options: () => ({
    text: '确定',
    title: '提示',
    content: ''
  })
})
</script>
<style lang="scss" scoped>
:deep(.van-overlay) {
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.toast {
  @apply fixed top-1/3 left-1/2 w-[50%] min-h-[100px];
  font-family: var(--font-family-text), serif;
  main {
    box-shadow:
      -1px 1px 15px rgba(0, 0, 0, 0.3),
      1px -1px 15px rgba(0, 0, 0, 0.3);
    @apply w-full h-full bg-[#fff] rounded-xl pb-4;
    .title-warp {
      @apply w-full py-2 text-center text-[#848484] text-[15px] font-[600];
      border-bottom: 1px solid #e7eef0;
    }
    .content-warp {
      @apply w-full py-5 text-center text-[#3F3F3F] text-[15px] font-[600];
      .content {
        @apply w-[90%] m-auto text-[#F54E4C];
      }
    }
    .button-warp {
      @apply w-[75%] py-1.5 bg-black m-auto rounded-[20px] text-center text-[#fff] text-[15px] font-[500] mt-2 bg-[#157BFE];
      background: linear-gradient(to top, #0071ff, #3c8fff);
      box-shadow: 0 1px 5px 0 #3c8fff;
    }
  }
  transform: translateX(-50%);
  .close {
    @apply h-[30px] w-[30px] rounded-full border-2 border-white absolute top-[-24px] right-[-24px] flex items-center justify-center;
  }
}
</style>
