<template>
  <main>
    <Header />
    <div class="logo-content">
      <div class="logo-img-text">
        <div class="logo-image" />
        <div class="logo-text">链世界</div>
      </div>
    </div>
    <div class="form">
      <div class="avatar-content">
        <div class="avatar">1</div>
      </div>
      <div class="nickname-content">
        <div class="nickname">
          <van-field placeholder="请输入昵称" />
        </div>
      </div>
      <div class="pre-address">
        <div class="pre">
          <span>上级地址：</span>
          <div class="address">0x1234567890</div>
          <div class="copy">
            <van-icon
              class-prefix="icon"
              name="fuzhi"
              @click="copy"
              size="20"
              color="#fff"
            />
          </div>
        </div>
      </div>
      <div class="go-to-content">
        <div class="go-to">
          <van-icon
            class-prefix="icon"
            name="jiantou_xiangyou"
            size="30"
            color="#fff"
          />
        </div>
      </div>
    </div>
    <footer>
      <div
        class="text"
        v-text-to-right="'一个完全去中心化的聊天APP'"
      />
      <div
        class="text"
        v-text-to-right="'带你探索你的自由世界'"
      />
    </footer>
  </main>
</template>
<script lang="ts" setup>
import { copyTextToClipboard } from '@utils/base/copy.ts'
import Header from '../../../ui-library/header.vue'

const copy = () => {
  copyTextToClipboard('0x1234567890')
}
</script>
<style lang="scss" scoped>
main {
  @apply h-full flex flex-col w-full;
  background: linear-gradient(to right, #076eaa, #0a2e64);
  .logo-content {
    @apply h-[180px] w-full  flex items-center justify-center mt-10;
    .logo-img-text {
      @apply text-center;
      .logo-image {
        @apply h-[100px] w-[130px]  bg-[url(@/assets/image/enroll/regiestlogo.png)];
        background-position: center top;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .logo-text {
        @apply text-white text-[20px] font-bold  tracking-[4px];
      }
    }
  }
  .form {
    @apply flex-1  flex flex-col items-center;
    .avatar-content {
      @apply h-[100px] w-[100px]  flex  items-center justify-center;
      .avatar {
        @apply h-[90px] w-[90px]  rounded-full bg-white  text-center text-white text-[25px];
      }
    }
    .nickname-content {
      @apply h-[80px] w-full  flex items-center justify-center;
      .nickname {
        @apply w-[65%] h-[50px]  text-white text-[20px];
        :deep(.van-field) {
          font-size: 16px;
          border-radius: 8px;
        }
        :deep(input::placeholder) {
          color: #fff;
          font-size: 18px;
        }
      }
    }
    .pre-address {
      @apply py-2 w-full;
      .pre {
        @apply flex items-center justify-center text-white;
        span {
          @apply tracking-[2px] text-[16px];
        }
        .address {
          @apply text-[15px] tracking-[1px] max-w-[35%] mr-1;
        }
      }
    }
    .go-to-content {
      @apply h-[70px] w-full mt-5 flex items-center justify-center;
      .go-to {
        @apply h-[57px] w-[57px] rounded-full bg-[#0A85ED] flex items-center justify-center;
      }
    }
  }
  footer {
    @apply h-[120px] w-full;
    .text {
      @apply text-white text-center;
    }
  }
}
</style>
