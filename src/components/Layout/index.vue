<template>
  <div class="body flex flex-col h-full w-full">
    <div class="content flex-1 w-full overflow-x-hidden overflow-y-auto">
      <router-view />
    </div>
    <div class="footer h-[50px] w-full">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  background-color: var(--home-message-content-bg);
}
</style>
