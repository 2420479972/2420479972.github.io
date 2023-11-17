<template>
  <div class="header bg-amber-100 h-[80px] w-full">
    <Header />
  </div>
  <div class="content space-y-.5">
    <Message
      type="message"
      :item="{ unread: 20 }"
    />
  </div>
</template>
<script lang="ts" setup>
import Message from '@components/Message-Contact/index.vue'
</script>
<style lang="scss" scoped>
.content {
  height: calc(100% - 80px);
  width: 100%;
  overflow: auto;
}

header {
  @apply w-[50vw] h-[20vh] bg-[#fff] rounded-xl;
}
</style>
