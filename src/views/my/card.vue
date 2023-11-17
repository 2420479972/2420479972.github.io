<template>
  <div class="card">
    <div class="avatar-warp">
      <div class="avatar">1</div>
      <div class="text">捷克牛仔</div>
    </div>
    <div class="right-warp">
      <div class="content">
        <div
          class="box"
          v-for="configItem in config"
          :key="configItem.key"
        >
          <div class="content-text">
            <span :style="configItem.labelStyle">{{ configItem.label }}：</span>
            <span :style="configItem.valueStyle">{{ item[configItem.key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { StyleValue } from 'vue'

type Props = {
  config: {
    label: string
    key: string
    labelStyle?: StyleValue
    valueStyle?: StyleValue
  }[]
  item: {
    [index: string]: string
  }
}

withDefaults(defineProps<Props>(), {
  config: () => [],
  item: () => ({})
})
</script>
<style lang="scss" scoped>
.card {
  @apply w-[100%] px-[10px] py-[15px] bg-white mt-4  rounded-lg flex items-center;
  &:last-child {
    @apply mb-4;
  }
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.3);
  .avatar-warp {
    @apply flex flex-col items-center relative;
    .avatar {
      @apply w-[60px] h-[60px] bg-[#EDEDED] rounded-full leading-[60px] text-center text-[#6B94F8] font-bold;
    }
    .text {
      @apply text-[#000] font-bold mt-[8px] whitespace-normal overflow-hidden overflow-ellipsis text-[14px];
    }
  }
  .right-warp {
    @apply flex-1 ml-[8px] pl-[8px] relative;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background: #ededed;
      position: absolute;
      top: 0;
      left: 0px;
      transform: translateX(-50%);
    }

    .content {
      @apply text-[#6B94F8]  flex flex-wrap justify-between;
      .box {
        @apply py-[5px] px-[3px];
        width: 49.8%;
        .content-text {
          @apply w-full overflow-hidden whitespace-nowrap overflow-ellipsis text-[12px] font-bold;
          span {
            @apply text-[#555555] text-[12px] font-bold;
          }
        }
      }
    }
  }
}
</style>
