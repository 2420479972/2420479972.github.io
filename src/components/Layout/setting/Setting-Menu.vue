<template>
  <div
    class="menu-item"
    v-for="item in data"
    :key="item.text"
    @click="item.handler"
  >
    <van-icon
      class-prefix="icon"
      :name="item.icon"
      size="20"
      color="#808B8F"
    />
    <span class="text-[16px] font-[500]">{{ $t(item.text) }}</span>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const data = [
  {
    icon: 'tongxunlu',
    text: 'settingMenu.contacts'
  },
  {
    icon: 'faxian',
    text: 'settingMenu.found'
  },
  {
    icon: 'shenqing',
    text: 'settingMenu.applicationCenter'
  },
  {
    icon: 'fenxiang',
    text: 'settingMenu.popularize'
  },
  {
    icon: 'dailishang',
    text: 'settingMenu.proxyApplication'
  },
  {
    icon: 'diqiu',
    text: 'settingMenu.chineseEnglishSwitching',
    handler: () => {
      i18n.locale.value == 'zh' ? (i18n.locale.value = 'en') : (i18n.locale.value = 'zh')
    }
  },
  {
    icon: 'jiedian',
    text: 'settingMenu.nodeSwitching'
  },
  {
    icon: 'shengyin',
    text: 'settingMenu.soundSettings'
  },
  {
    icon: 'home',
    text: 'settingMenu.platformIntroduction'
  },
  {
    icon: 'tuichu',
    text: 'settingMenu.quit'
  }
]
</script>
<style lang="scss" scoped>
.menu-item {
  @apply h-[37px] w-full pl-7 flex items-center text-white my-2 hover:bg-[var(--setting-menu-hover)];
  span {
    @apply ml-3 text-[var(--setting-menu-textColor)] text-[14px];
  }
}
</style>
