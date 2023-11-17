<template>
  <div class="content">
    <div class="top">
      <Header>
        <span class="font-bold text-[18px] text-white">进群确认</span>
        <template #close>
          <Hamburg />
        </template>
      </Header>
    </div>
    <main>
      <ContanctsSearch />
      <div class="main">
        <Contact
          :type="'contact'"
          v-for="item in 30"
          class="mt-1 border-b border-[#E5E5E5]"
        >
          <template #line-tip> 周日晚上一起聚会请提前报名 </template>
          <template #rightCheckbox
            ><div class="button-warp space-y-2">
              <div class="agree">同意</div>
              <div class="refuse">拒绝</div>
            </div>
          </template>
        </Contact>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { Hamburg } from '../../ui-library/easy-components.tsx'
import Header from '../../ui-library/header.vue'
import ContanctsSearch from '../contacts/contancts-search.vue'
import Contact from '../../components/Message-Contact/index.vue'
</script>
<style lang="scss" scoped>
.message-contact {
  @apply h-[100px];
}
.content {
  @apply h-full w-full bg-[var(--home-message-content-bg)];
  .top {
    @apply w-full bg-[var(--home-header-bg)];
  }
  main {
    @apply w-full flex-col flex;
    height: calc(100% - 64px);

    .main {
      @apply flex-1 overflow-y-auto;
      .agree,
      .refuse {
        @apply py-[5px] px-[15px] rounded-full bg-[#2368F4] text-white;
      }
      .refuse {
        background: rgba(35, 104, 244, 0.5);
      }
    }
  }
}
</style>
