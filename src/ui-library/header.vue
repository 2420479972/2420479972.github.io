<template>
  <header>
    <div class="pre">
      <slot name="pre">
        <van-icon
          @click="$router.go(-1)"
          class-prefix="icon"
          name="shangyiji"
          size="35"
          color="#fff"
        />
      </slot>
    </div>
    <slot />
    <div class="close">
      <slot name="close">
        <van-icon
          class-prefix="icon"
          name="guanbi"
          size="25"
          color="#fff"
        />
      </slot>
    </div>
  </header>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
header {
  @apply flex items-center justify-between h-16 px-3 py-2;

  .pre,
  .close {
    @apply h-7 w-7  flex items-center justify-center;
  }
}
</style>
