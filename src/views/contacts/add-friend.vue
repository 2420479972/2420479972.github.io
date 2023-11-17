<template>
  <ContanctsLayout>
    <template #header>
      <ContanctsSearch />
      <div class="search-warp">
        <div class="input">
          <input type="text" />
        </div>
        <div class="icon">
          <van-icon
            name="smile-o"
            :size="35"
            color="#fff"
          />
        </div>
      </div>
    </template>
    <template #main>
      <ListContact
        :source="[{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]"
        type="contact"
        position="right"
        v-model="select"
      />
    </template>
  </ContanctsLayout>
</template>
<script lang="ts" setup>
import ListContact from '../../components/Message-Contact/List-Contact.vue'
import ContanctsLayout from './contancts-layout.vue'
import ContanctsSearch from './contancts-search.vue'

const select = ref([])
</script>
<style lang="scss" scoped>
.search-warp {
  @apply flex  items-center h-[80px] justify-between bg-[#fff] px-[25px] whitespace-nowrap;
  border-bottom: 1px solid #e7e7e7;
  .input {
    @apply flex-1 h-[40px]  rounded-md  flex justify-between px-3 bg-[#F0F1F6] text-[#88888A]  text-[16px] font-[600];
    input {
      @apply w-full h-full bg-transparent;
    }
    box-shadow:
      1px 1px 10px -2px #d5d1d1 inset,
      1px 1px 10px -2px #edeef3 inset,
      0px 0px 10px -2px #eff0f5 inset,
      1px 1px 10px -2px #e7e8ed inset;
  }
  .icon {
    @apply w-[40px]  h-[40px]  rounded bg-[#4D81E7] flex items-center justify-center ml-[10px];
  }
}
</style>
