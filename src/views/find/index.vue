<template>
  <div class="content">
    <div class="top">
      <Header>
        <template #close>
          <span />
        </template>
      </Header>
    </div>
    <main>
      <van-tabs
        v-model:active="active"
        swipeable
      >
        <van-tab
          v-for="tabItem in tabList"
          :title="tabItem.title"
          :key="tabItem.title"
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
import Header from '@/ui-library/header.vue'
import Game from './game.vue'
const tabContent = ref<HTMLDivElement | any>()

const select = ref([])

const active = ref(0)

watch(
  () => active.value,
  () => {
    select.value = []
    tabContent.value.forEach((item: HTMLDivElement) => {
      item.scrollTop = 0
    })
  }
)

const tabList = [
  {
    title: '游戏',
    view: Game
  },
  {
    title: '加盟'
  },
  {
    title: '空投'
  }
]
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
