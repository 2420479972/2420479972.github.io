<template>
  <CutLayout :tabList="tabList" />
</template>
<script lang="ts" setup>
import CutLayout from '@/components/Cut-Layout/index.vue'
import PersonalInformation from './information.vue'
import Account from './account.vue'
import Team from './team.vue'
import Earnings from './earnings.vue'
const tabList = [
  {
    title: '个人信息',
    view: PersonalInformation
  },
  {
    title: '个人账户',
    view: Account
  },
  {
    title: '我的团队',
    view: Team
  },
  {
    title: '我的收益',
    view: Earnings
  },
  {
    title: '其他',
    view: Earnings
  }
]
</script>
<style lang="scss" scoped></style>
