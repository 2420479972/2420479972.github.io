<template>
  <div class="content">
    <div class="top">
      <Header>
        <template #default>
          <slot />
        </template>
        <template #close>
          <slot name="close">
            <Hamburg
              :showDot="true"
              :offset="[-32, 10]"
            />
          </slot>
        </template>
      </Header>
    </div>
    <main>
      <van-tabs
        v-model:active="__active"
        swipeable
        :lazy-render="false"
      >
        <van-tab
          v-for="tabItem in tabList"
          :title="tabItem.title"
          :key="tabItem.key || tabItem.title"
        >
          <div class="tab-content">
            <div
              class="tab-warp"
              ref="tabContent"
            >
              <component :is="tabItem.view" />
              <van-back-top />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { Hamburg } from '../../ui-library/easy-components.tsx'
import Header from '../../ui-library/header.vue'
const tabContent = ref<HTMLDivElement | any>()

type Props = {
  active: number | string
  tabList: {
    title: string
    key?: string
    view?: any
  }[]
}

const props = withDefaults(defineProps<Props>(), {
  active: 0,
  tabList: () => [
    {
      title: '通讯录'
    },
    {
      title: '创建新群'
    },
    {
      title: '移除好友'
    },
    {
      title: '添加好友'
    },
    {
      title: '好友申请'
    },
    {
      title: '申请进群'
    }
  ]
})

const emit = defineEmits(['update:active', 'changeTab'])

const __active = computed({
  get: () => props.active,
  set: (val) => emit('update:active', val)
})

watch(
  () => __active.value,
  () => {
    tabContent.value.forEach((item: HTMLDivElement) => {
      item.scrollTop = 0
    })
  }
)
</script>
<style lang="scss" scoped>
.content {
  @apply h-full w-full bg-[var(--home-message-content-bg)];
  .top {
    @apply w-full bg-[var(--home-header-bg)];
  }
  main {
    @apply w-full;
    height: calc(100% - 64px);
    :deep(.van-search__content) {
      @apply rounded-[8px];
    }
    :deep(.van-tab) {
      @apply pb-[15px];
    }
    :deep(.van-tabs__nav) {
      @apply bg-[var(--home-header-bg)];
    }
    :deep(.van-tab__text) {
      @apply text-[16px] font-[600] text-white;
    }
    :deep(.van-tabs__line) {
      @apply bg-[#FFE400] w-[60px];
    }
    :deep(.van-tabs__nav--line) {
      @apply pb-[0px];
    }
    .tab-content {
      height: calc(100vh - 108px);
      @apply flex flex-col;
      .tab-warp {
        @apply flex-1 overflow-y-auto;
      }
    }
  }
}
</style>
