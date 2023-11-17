<template>
  <ContanctsLayout
    :show-button="selectedUser.length > 0"
    @handle-click="handleClick"
  >
    <template #header>
      <ContanctsSearch :selected-num="selectedUser.length" />
    </template>
    <template #main>
      <main>
        <div class="header">
          <div class="group-avatar">1</div>
          <div class="group-name">
            <van-field placeholder="输入群组名称" />
            <van-icon
              name="smile-o"
              color="#777C89"
              :size="30"
            />
          </div>
        </div>
        <Line class="line" />
        <SelectUser v-model:selected-user="selectedUser" />
        <Line class="line" />
        <div class="users-container">
          <div class="all-users"><span>10</span>&nbsp;成员</div>
          <div class="user-warp">
            <ListContact
              :type="'contact'"
              :source="source"
              position="right"
              v-model:selected="selectedUser"
            />
          </div>
        </div>
      </main>
    </template>
  </ContanctsLayout>
</template>
<script lang="ts" setup>
import { Line } from '../../ui-library/easy-components.tsx'
import SelectUser from '../contacts/select-user.vue'
import ListContact from '../../components/Message-Contact/List-Contact.vue'
import ContanctsSearch from './contancts-search.vue'
import ContanctsLayout from './contancts-layout.vue'

const selectedUser = ref([])

const source = new Array(10).fill(1).map((item, index) => {
  return {
    key: index,
    value: item
  }
})

const handleClick = () => {
  console.log(12341234123)
}
</script>
<style lang="scss" scoped>
.content {
  @apply h-full w-full bg-[var(--home-message-content-bg)];
  main {
    @apply w-full flex-col flex;
    height: calc(100%);
    .header {
      @apply w-full h-[80px]  p-[20px] flex justify-between items-center bg-[var(--home-message-content-bg)];
      .group-avatar {
        @apply h-[60px] w-[60px] bg-[#000] rounded-full leading-[60px] text-center text-white text-[30px];
        background: linear-gradient(to top, #3991d8, #51b1fb);
      }
      .group-name {
        @apply h-[50px]  ml-[10px] flex items-center;
        width: calc(100% - 100px);
        border-bottom: 2px solid #dcdcdc;
        :deep(.van-field) {
          @apply pl-0 py-[12px];
          font-size: 16px;
          border-radius: 8px;
          background: none;
          &::after {
            display: none;
          }
        }
        :deep(input::placeholder) {
          color: #dbdbdb;
          font-size: 18px;
        }
      }
    }
    .line {
      @apply h-[2px] bg-[#EFEFEF];
    }
    .search {
      @apply flex items-center px-[20px] py-[5px];
      border-bottom: 2px solid #ededed;
      .select-number {
        @apply mr-[20px];
      }
      .search-warp {
        @apply flex-1;
        :deep(.van-search__content) {
          @apply rounded-lg;
        }
      }
    }
    .users-container {
      @apply flex-1 overflow-y-auto;
      .all-users {
        @apply h-[40px] px-[20px] leading-[40px] mt-[5px] text-[#007FBD];
      }
      .user-warp {
        height: calc(100% - 45px);
        @apply w-full overflow-y-auto;
      }
    }
  }
}
</style>
