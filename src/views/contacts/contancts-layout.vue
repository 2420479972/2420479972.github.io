<template>
  <div class="user-contacts-content">
    <slot name="header" />
    <div class="content">
      <slot name="main" />
      <slot />
    </div>
  </div>
  <TagGo v-bind="$attrs" />
</template>
<script lang="ts" setup>
import TagGo from '../../ui-library/tag-go.vue'
</script>
<style lang="scss" scoped>
.user-contacts-content {
  @apply flex flex-col w-full h-full bg-[var(--home-message-content-bg)];
  .content {
    @apply flex-1 overflow-y-auto relative;
  }
}
</style>
