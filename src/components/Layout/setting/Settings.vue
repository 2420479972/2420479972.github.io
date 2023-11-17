<template>
  <div
    class="mask fixed inset-0 bg-[rgba(0,0,0,0.5)]"
    ref="maskDom"
    style="z-index: -1"
  >
    <Transition
      name="setting-transition"
      mode="out-in"
      @after-leave="onAfterLeave"
      @enter="enter"
    >
      <div
        ref="settingDom"
        class="settings"
        v-show="showSetting"
      >
        <header>
          <SettingHeader />
        </header>
        <nav>
          <SettingItem />
        </nav>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
import SettingHeader from '@components/Layout/setting/Settings-Header.vue'
import SettingItem from '@components/Layout/setting/Setting-Menu.vue'
type Props = {
  showSetting: boolean
}
const emit = defineEmits(['update:showSetting'])
withDefaults(defineProps<Props>(), {
  showSetting: false
})

const maskDom = ref<HTMLElement | any>(null)
const settingDom = ref<HTMLElement | any>(null)
const onAfterLeave = () => {
  maskDom.value.style.zIndex = '-1'
}
const enter = () => {
  maskDom.value.style.zIndex = '100'
}
onMounted(() => {
  maskDom.value.addEventListener('click', (e: Event) => {
    const eventDom = e.target as HTMLElement
    if (eventDom.contains(settingDom.value)) {
      emit('update:showSetting', false)
    }
  })
})
</script>
<style lang="scss" scoped>
.settings {
  @apply fixed top-0 left-0 w-[60%] h-full bg-white z-50;
  header {
    @apply h-[160px] w-full flex justify-between px-7 bg-[var(--setting-header-bg)] pt-10;
    .user-settings {
      @apply w-[80%] h-full flex flex-col;
      .user-image {
        @apply h-[50px] w-[50px] bg-amber-950 rounded-full leading-[50px] text-center text-white text-[25px];
      }
      .user-signature,
      .user-address {
        @apply text-[var(--setting-signature)] text-[15px] mt-1;
      }
      .user-address {
        @apply text-[var(--setting-address)] text-[12px] mt-0.5;
      }
    }
    .cut-theme {
      @apply w-[30px] h-[30px]  rounded-full flex items-center justify-center;
    }
  }
  nav {
    @apply h-[calc(100%-160px)] bg-[var(--setting-nav-bg)] w-full py-2;
  }
}
.setting-transition-enter-active {
  transition: all 0.3s ease-out;
}

.setting-transition-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.setting-transition-enter-from,
.setting-transition-leave-to {
  transform: translateX(-20%);
  opacity: 0;
}
</style>
