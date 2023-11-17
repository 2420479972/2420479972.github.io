<template>
  <div class="select-user">
    <div
      class="user-warp"
      v-for="SelectUserItem in selectedUser"
      :key="SelectUserItem?.id + '/'"
    >
      <div class="user-content">
        <div
          class="user-item"
          :style="{ background: getRandomColor() }"
        >
          {{ SelectUserItem?.name }}
        </div>
        <div class="name">名字</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
type Props = {
  selectedUser: any[]
}

const props = withDefaults(defineProps<Props>(), {
  selectedUser: () => []
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>
<style lang="scss" scoped>
.select-user {
  @apply w-full h-auto flex flex-wrap px-[5px] max-h-[110px] overflow-y-auto;
  .user-warp {
    @apply p-[5px];
    .user-content {
      @apply flex items-center bg-[#F1F1F1] rounded-full pr-[5px];
      .user-item {
        @apply w-[35px] h-[35px] bg-white rounded-full leading-[35px] text-center inline-block;
      }
      .name {
        @apply px-[7px] text-[#7C7C7C] text-[16px];
      }
    }
  }
}
</style>
