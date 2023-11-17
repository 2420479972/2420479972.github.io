<template>
  <div class="user-contacts-content">
    <slot name="header" />
    <div class="content">
      <slot name="main" />
    </div>
  </div>
  <transition mode="in-out">
    <div
      class="icon-warp"
      v-show="showButton"
      @click="clickIcon"
    >
      <van-icon
        class-prefix="icon"
        name="jiantou_xiangyou"
        color="#E7E7E7"
        :size="25"
      />
    </div>
  </transition>
</template>
<script lang="ts" setup>
type Props = {
  showButton: boolean
}
withDefaults(defineProps<Props>(), {
  showButton: false
})

const emit = defineEmits(['handleClick', 'update:showButton'])

const clickIcon = () => {
  emit('update:showButton', false)
  emit('handleClick')
}
</script>
<style lang="scss" scoped>
.user-contacts-content {
  @apply flex flex-col w-full h-full bg-[var(--home-message-content-bg)];
  .content {
    @apply flex-1 overflow-y-auto relative;
  }
}
.icon-warp {
  @apply h-[40px] w-[40px] bg-[#60ACE6] absolute bottom-[90px] right-[30px] rounded-full flex items-center justify-center;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0);
}
</style>
