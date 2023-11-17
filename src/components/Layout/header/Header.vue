<template>
  <div class="header">
    <Hamburg :showDot="true" />
    <div class="header-search">
      <van-search :placeholder="$t('layoutHeader.placeholder')" />
    </div>
    <van-popover
      v-model:show="showPopover"
      theme="dark"
      placement="bottom-end"
      :actions="actions"
      :offset="[-5, 5]"
    >
      <template #reference>
        <div class="header-add">
          <div class="hamburger-add">
            <div
              class="line"
              v-for="item in 2"
              :key="item"
            />
          </div>
        </div>
      </template>
    </van-popover>
  </div>
</template>
<script lang="ts" setup>
import { Hamburg } from '../../../ui-library/easy-components.tsx'

const showTip = ref(true)

const showPopover = ref<boolean>(false)
const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]
</script>
<style lang="scss" scoped>
:root {
  --van-popover-light-background: red;
}
.header {
  @apply h-full w-full flex items-center justify-between;
  background: var(--home-header-bg);
  &-search {
    @apply h-[40px] flex-1  flex items-center px-5;
    :deep(.van-search) {
      width: 100%;
      padding: 0;
      border-radius: 10px;
      @apply overflow-hidden;
      background: var(--home-header-search-bg) !important;
      input {
        font-size: 16px;
        color: #7c7c83;
      }
    }
    :deep(.van-search__content) {
      background: var(--home-header-search-bg) !important;
    }
  }
  &-add {
    @apply h-[40px] w-[40px];
    .hamburger-add {
      @apply h-full w-full flex flex-col items-center justify-center relative;
      .line {
        @apply h-[2px] w-[22px] bg-white;
        &:nth-child(1) {
          @apply rotate-90 absolute;
        }
      }
    }
  }
  :deep(.van-popover--dark .van-popover__content) {
    @apply text-[#5D5D5D];
    :deep(.van-popover__action) {
      @apply text-[#5D5D5D];
    }
  }
}
</style>
