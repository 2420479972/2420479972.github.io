<script setup lang="ts">
import Settings from '@components/Layout/setting/Settings.vue'

onMounted(() => {
  document.body.setAttribute('type', sessionStorage.getItem('theme') || 'theme-light')
})
const showSetting = ref(false)
provide('showSetting', showSetting)
</script>

<template>
  <router-view />
  <Settings v-model:showSetting="showSetting" />
</template>

<style scoped lang="scss"></style>
