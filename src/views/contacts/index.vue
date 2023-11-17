<template>
  <div class="content">
    <div class="top">
      <Header>
        <template #close>
          <Hamburg
            :showDot="true"
            :offset="[-32, 10]"
          />
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
              <component
                :is="tabItem.view"
                v-model:selected="select"
                :clearCheck="select.length === 0"
              />
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
import MakeNewGroup from './make-new-group.vue'
import UserContacts from './user-contacts.vue'
import AddFriend from './add-friend.vue'
import RemoveFriend from './remove-friend.vue'
import ApplicationGroup from './application-group.vue'
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
    title: '通讯录',
    view: UserContacts
  },
  {
    title: '创建新群',
    view: MakeNewGroup
  },
  {
    title: '移除好友',
    view: RemoveFriend
  },
  {
    title: '添加好友',
    view: AddFriend
  },
  {
    title: '好友申请',
    view: MakeNewGroup
  },
  {
    title: '申请进群',
    view: ApplicationGroup
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
