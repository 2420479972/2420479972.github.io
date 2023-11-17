<template>
  <ContanctsLayout>
    <template #header>
      <Search>
        <template #right-icon><span /></template>
        <template #left-icon>
          <van-icon
            class-prefix="icon"
            class="mt-1.5"
            name="sousuo"
            color="#E7E7E7"
            size="25"
        /></template>
      </Search>
    </template>
    <div class="main">
      <GameItem
        class="game-item"
        v-for="item in 10"
      >
        <template #portrait>
          <div class="token-img" />
        </template>
        <div class="body">
          <div class="title">BTC</div>
          <div class="title-detail">实例看见阿里斯顿看风景</div>
          <div class="address">链接地址：</div>
          <div class="address">合约地址：</div>
        </div>
        <div class="button">立即查看</div>
      </GameItem>
    </div>
  </ContanctsLayout>
</template>
<script lang="ts" setup>
import Search from '@components/Search/index.vue'
import ContanctsLayout from '../contacts/contancts-layout.vue'
import GameItem from '@components/Message-Contact/index.vue'
</script>
<style lang="scss" scoped>
.main {
  @apply h-full w-full px-[12px]  overflow-y-auto;
  .game-item {
    @apply w-full bg-white rounded-lg relative mb-[15px];
    .token-img {
      @apply h-[60px] w-[60px] bg-[#60ACE6] rounded-full;
    }
    .body {
      @apply flex flex-col justify-center;
      .title {
        @apply text-[16px] font-[600] text-[#333333];
      }
      .title-detail {
        @apply text-[11px] font-[400] text-[#999999];
      }
      .address {
        @apply text-[12px] font-[400] text-[#000] mt-[3px] font-bold;
      }
    }
    .button {
      @apply absolute right-[4%] top-[50%] bg-[#60ACE6] rounded-full text-white text-[12px] font-[400] px-[10px] py-[4px];
      transform: translateY(-50%);
    }
  }
}
</style>
