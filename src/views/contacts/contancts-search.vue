<template>
  <div class="search-content">
    <div
      class="select-user"
      v-if="selectedNum"
    >
      <slot name="select">
        <div class="text">
          已选择 <span>{{ selectedNum }}&nbsp;</span>人
        </div>
      </slot>
    </div>
    <van-search v-bind="$attrs">
      <template #left-icon />
      <template #right-icon>
        <van-icon
          class-prefix="icon"
          class="mt-1.5"
          name="sousuo"
          color="#E7E7E7"
          size="25"
        />
      </template>
    </van-search>
  </div>
</template>
<script lang="ts" setup>
type Props = {
  selectedNum: number | boolean
}

withDefaults(defineProps<Props>(), {
  selectedNum: 0
})
</script>
<style lang="scss" scoped>
.search-content {
  @apply flex  items-center bg-[var(--home-header-bg)] px-[10px] whitespace-nowrap;
  .select-user {
    @apply mr-3;
  }
}
:deep(.van-search__content) {
  background: var(--home-header-search-bg) !important;
  border-radius: 8px;
}
:deep(.van-search) {
  width: 100%;
  background: var(--home-header-bg) !important;
  padding: 10px 0;

  input {
    font-size: 16px;
    color: #7c7c83;
  }
}
</style>
