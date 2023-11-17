<template>
  <ContanctsLayout>
    <template #header>
      <SelectUser />
      <ContanctsSearch placeholder="请输入群链接..." />
    </template>
    <template #main>
      <Contact :type="'contact'">
        <template #line-tip> 周日晚上一起聚会请提前报名 </template>
        <template #rightCheckbox
          ><div class="button-warp space-y-2">
            <div class="button">同意</div>
            <div class="button">拒绝</div>
          </div>
        </template>
      </Contact>
    </template>
  </ContanctsLayout>
</template>
<script lang="ts" setup>
import SelectUser from './select-user.vue'
import ContanctsLayout from './contancts-layout.vue'
import ContanctsSearch from './contancts-search.vue'
import Contact from '../../components/Message-Contact/index.vue'
</script>
<style lang="scss" scoped>
.button {
  @apply py-[5px] px-[15px] rounded-full bg-[#2368F4] text-white;
}
</style>
