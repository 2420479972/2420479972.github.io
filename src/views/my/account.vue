<template>
  <header>
    <div
      class="usd"
      style="background: linear-gradient(to right, #f8a573, #ee7353)"
    >
      <div class="message">
        <div class="usd-name">USDW账户</div>
        <div class="usd-amount">12931.1231</div>
      </div>
      <div class="operate">
        <div class="button">充值</div>
        <div
          class="button"
          @click="visible = true"
        >
          兑换
        </div>
      </div>
      <div
        class="after"
        style="right: -30px; color: #f6a884"
      >
        U
      </div>
    </div>
    <div
      class="usd"
      style="background: linear-gradient(to right, #50c5ee, #3492ef)"
    >
      <div class="message">
        <div class="usd-name">GAS账户</div>
        <div class="usd-amount">12931.1231</div>
      </div>
      <div class="operate">
        <div class="button">充值</div>
        <div
          class="button"
          @click="visible = true"
        >
          兑换
        </div>
      </div>
      <div
        class="after"
        style="right: -30px; color: #6bbdf2"
      >
        G
      </div>
    </div>
  </header>
  <Line />
  <div class="form">
    <div class="keys">
      <van-field
        v-model="value"
        readonly
        placeholder="顶部对齐"
        label-align="top"
      >
        <template #label>
          <div class="label-content">
            <div class="label">GAS地址</div>
            <van-icon
              class-prefix="icon"
              size="22"
              color="#79A4FF"
              name="fuzhi"
            />
          </div>
        </template>
      </van-field>
      <van-field
        v-model="value"
        readonly
        placeholder="顶部对齐"
        label-align="top"
      >
        <template #label>
          <div class="label-content">
            <div class="label">GAS私钥</div>
            <van-icon
              class-prefix="icon"
              size="27"
              color="#79A4FF"
              name="yanjing_xianshi_o"
            />
            <van-icon
              class-prefix="icon"
              size="27"
              color="#79A4FF"
              name="yanjing_yincang_o"
            />
          </div>
        </template>
      </van-field>
    </div>
  </div>
  <Line />
  <QrCode>
    <div class="qr-code-address">
      <van-icon
        class-prefix="icon"
        name="shuaxin"
        color="#8084F9"
      />
      <span>GAS地址二维码</span>
    </div>
  </QrCode>
  <Toast
    v-model:visible="visible"
    :options="{
      text: '确定',
      title: 'USD账户',
      content: ''
    }"
  >
    <div class="input">
      <van-field />
    </div>
    <template #footer>
      <div class="button-warp">
        <div class="button-exchange">兑换</div>
        <div class="button-authorization">授权</div>
      </div>
    </template>
  </Toast>
</template>
<script lang="ts" setup>
import { Line, QrCode } from '../../ui-library/easy-components.tsx'
import Toast from '../../components/Toast/Toast.vue'
const visible = ref(false)
</script>
<style lang="scss" scoped>
header {
  @apply min-h-[170px] w-full bg-white py-[25px] px-[20px] flex justify-between;
  .usd {
    @apply h-[100%] bg-red-900 w-[48%] p-[15px] rounded-[10px] relative overflow-hidden;

    .message {
      @apply px-3 relative z-10;
      .usd-name {
        @apply text-[#E7E7E7] text-[18px] mb-[5px];
      }
      .usd-amount {
        @apply w-full text-[#E7E7E7] text-[18px] font-bold;
        word-break: break-all;
      }
    }
    .operate {
      @apply flex justify-between mt-[10px] w-[70%] relative z-10;
      .button {
        @apply text-white text-[20px] active:bg-white py-1 min-w-[60px] text-center rounded-md;
        &:active {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .after {
      @apply text-[#F6A783] text-[220px] absolute top-0 right-0;
      z-index: 1;
      transform: rotate(35deg);
      top: -95px;
      right: 0px;
    }
  }
}
.form {
  @apply py-[20px];
  :deep(.van-field__control) {
    @apply py-[5px] rounded-md bg-[#EDEDED] px-1.5 mt-[8px];
  }
  :deep(.van-cell) {
    &:after {
      display: none;
    }
  }
  .label-content {
    @apply flex items-center space-x-2;
    .label {
      @apply h-[28px] px-[20px] leading-[26px] rounded-md text-[#6B94F8] font-bold;
      border: 2px solid #94b5fb;
    }
  }
}
.qr-code-address {
  @apply border-2 border-[#8084F9] px-[13px] py-[2px] rounded-[12px] flex items-center;
  span {
    @apply ml-[5px] text-[#8084F9] text-[14px];
    font-weight: normal;
  }
}

.button-warp {
  @apply flex justify-between px-[30px];
  .button-exchange,
  .button-authorization {
    @apply px-3 py-1 bg-[#5A8FFF] rounded-md text-white text-[18px] font-[600];
    &:active {
      background: rgba(90, 143, 255, 0.5);
    }
  }
  .button-authorization {
    @apply bg-[#F8201E];
    &:active {
      background: rgba(248, 32, 30, 0.5);
    }
  }
}
.input {
  @apply mx-[30px] overflow-hidden border-2 border-[#CFCFCF] rounded-md;
}
</style>
