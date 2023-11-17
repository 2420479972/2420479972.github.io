<template>
  <teleport to="#app">
    <div
      class="model"
      v-if="visible"
    >
      <div class="title">
        <div class="avatar" />
        <span>{{ title }}</span>
      </div>
      <main>
        <div class="content">
          <div class="text">你确定要删除与xxx的对话吗？</div>
        </div>
        <div class="tip">
          <van-checkbox
            shape="square"
            v-model="check"
            >&nbsp;同时删除xxx的消息</van-checkbox
          >
        </div>
      </main>
      <footer>
        <div
          class="cancel"
          @click="cancel"
        >
          取消
        </div>
        <div
          class="sure"
          @click="ok"
        >
          删除对话
        </div>
      </footer>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
type Props = {
  visible: boolean
  title: string
}

withDefaults(defineProps<Props>(), {
  visible: true,
  title: '删除对话'
})

const check = ref(false)

const emit = defineEmits(['update:visible', 'ok', 'cancel'])

const cancel = () => {
  emit('update:visible', false)
  emit('cancel')
}

const ok = () => {
  emit('ok', check.value)
}
</script>
<style lang="scss" scoped>
.model {
  font-family: var(--font-family-text);
  @apply p-[20px] bg-[#fff] rounded-[10px] w-[80%] fixed top-[45%] left-[50%];
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.5);
  .title {
    @apply flex items-center text-[20px] font-[500];
    .avatar {
      @apply w-[55px] h-[55px] rounded-full bg-[#000] mr-[10px];
    }
  }
  main {
    @apply w-full h-auto;
    .content {
      @apply w-full h-auto font-bold text-[18px]  my-5;
    }
    .tip {
      @apply text-[16px] text-[#696969] flex;
      :deep(.van-checkbox__icon) {
        font-size: 18px;
      }
    }
  }
  footer {
    @apply w-full h-[25px] flex items-center justify-end mt-[20px];
    .cancel,
    .sure {
      @apply px-[10px] text-[#008DF0] font-bold active:bg-red-900 py-1 rounded-lg;
      &:active {
        background: rgba(85, 144, 192, 0.4);
      }
    }
    .sure {
      @apply ml-[20px] text-red-600;
      &:active {
        background: rgba(192, 85, 122, 0.4);
      }
    }
  }
}
</style>
