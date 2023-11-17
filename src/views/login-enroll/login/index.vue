<template>
  <div class="content">
    <Header />
    <main>
      <div class="tip">WELCOME TO LOGIN！</div>
      <div class="form">
        <van-field placeholder="请输入密码" />
      </div>
      <div class="locke">
        <van-icon
          class-prefix="icon"
          name="suoding"
          size="30"
          color="#fff"
        />
        <van-icon
          class-prefix="icon"
          name="weisuoding"
          size="30"
          color="#fff"
        />
      </div>
    </main>
    <footer>
      <div class="logo" />
      <div
        class="text"
        v-text-to-right="'链世界去中心化聊天APP'"
      />
      <div
        class="text"
        v-text-to-right="'带你探索你的自由世界'"
      />
    </footer>
  </div>
</template>
<script lang="ts" setup>
import Header from '../../../ui-library/header.vue'
</script>
<style lang="scss" scoped>
.content {
  @apply h-full flex flex-col w-full;
  background: linear-gradient(to right, #076eaa, #0a2e64);
  main {
    @apply flex-1 flex flex-col items-center h-full w-full mt-[45%];
    .tip {
      @apply text-[#E7EEF0] text-[16px];
    }
    .form {
      @apply w-[65%] h-[50px]  text-white text-[20px] mt-[50px];
      :deep(.van-field) {
        font-size: 16px;
        border-radius: 8px;
        :deep(input::placeholder) {
          color: #fff;
          font-size: 18px;
        }
      }
    }
    .locke {
      @apply mt-[15px] space-x-2;
    }
  }
  footer {
    @apply flex flex-col items-center justify-center h-[210px] w-full;
    .logo {
      @apply h-[60px] w-[60px] bg-[url(@/assets/image/enroll/regiestlogo.png)];
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .text {
      @apply text-white text-[14px] tracking-[2px] mb-0.5;
    }
  }
}
</style>
