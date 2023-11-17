<template>
  <div class="user-settings">
    <div class="user-image">M</div>
    <div class="user-signature">Hello,Marry !</div>
    <div class="user-address">OXFSD..WQE12U</div>
  </div>
  <div class="cut-theme">
    <van-icon
      @click="cutTheme"
      class-prefix="icon"
      :name="isDart ? 'sun' : 'yueliang'"
      size="25"
      color="#fff"
    />
  </div>
</template>
<script lang="ts" setup>
const isDart = ref(sessionStorage.getItem('theme') == 'theme-dark')

const cutTheme = () => {
  const theme = sessionStorage.getItem('theme')
  if (theme == 'theme-light') {
    sessionStorage.setItem('theme', 'theme-dark')
  } else {
    sessionStorage.setItem('theme', 'theme-light')
  }
  document.body.setAttribute('type', sessionStorage.getItem('theme') || 'theme-light')
  isDart.value = sessionStorage.getItem('theme') == 'theme-dark'
  return sessionStorage.getItem('theme')
}
</script>
<style lang="scss" scoped>
.user-settings {
  @apply w-[80%] h-full flex flex-col;
  .user-image {
    @apply h-[50px] w-[50px] bg-amber-950 rounded-full leading-[50px] text-center text-white text-[25px];
  }
  .user-signature,
  .user-address {
    @apply text-[#F8FCFF] text-[15px] mt-1;
  }
  .user-address {
    @apply text-[var(--setting-user-phone-color)] text-[12px] mt-0.5;
  }
}
.cut-theme {
  @apply w-[30px] h-[30px]  rounded-full flex items-center justify-center;
}
</style>
