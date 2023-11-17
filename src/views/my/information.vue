<template>
  <div class="header">
    <div class="portrait">12312</div>
    <div class="text">
      <div class="name">韩商言妹妹</div>
      <div class="signature">
        <span> 等级：1级VIP </span>
        <div class="image">3级</div>
      </div>
    </div>
  </div>
  <main>
    <Popularize />
    <QrCode>邀请二维码</QrCode>
  </main>
  <footer>
    <Operate />
    <Operate style="margin-top: 30px" />
  </footer>
</template>
<script lang="ts" setup>
import { QrCode, Popularize, Operate } from '../../ui-library/easy-components.tsx'
</script>
<style lang="scss" scoped>
.header {
  @apply flex items-center  px-3 py-[22px]  border-b-2 border-[#EDEDED];
  .portrait {
    @apply w-[80px] h-[80px] bg-red-500 ml-[20px] rounded-full leading-[75px] text-center border-2 border-white;
  }
  .text {
    @apply text-white ml-[18px] text-[18px] font-[600];
    .name {
      @apply mb-2;
    }
    .signature {
      @apply flex items-center;
      .image {
        @apply ml-1.5;
      }
    }
  }
}
main {
  @apply py-[35px] px-[25px] w-full;
}
footer {
  @apply mb-[30px];
}
</style>
