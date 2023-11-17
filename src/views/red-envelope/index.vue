<template>
  <div class="content">
    <div class="top">
      <Header>
        <span class="font-bold text-[18px] text-white">发红包</span>
        <template #close>
          <Hamburg :showDot="true" />
        </template>
      </Header>
    </div>
    <main>
      <Envelope v-model:envelope-source="envelopeSource" />
      <Line />
      <div class="envelope-send">
        <div class="balance-content">
          <div class="balance">
            <div class="balance-text">账户余额：</div>
            <div class="balance-number">0.00 <span class="text-[22px] text-black font-bold">枚</span></div>
          </div>
        </div>
        <div class="envelope-form">
          <div
            class="envelope-number-content"
            v-for="envelopeItem in envelopeMap[type]"
            :key="envelopeItem.key"
          >
            <div class="envelope-number">
              <van-field :placeholder="envelopeItem.placeholder" />
            </div>
          </div>
          <div class="button-content">
            <div class="authorization">
              <span>授权</span>
            </div>
            <div class="stuffed">
              <span>塞入红包</span>
            </div>
          </div>
        </div>
        <div class="envelope-cover">
          <div class="text">
            <img
              src="../../assets/image/envelope/envelope_icon.png"
              alt=""
            />
            <span>红包封面</span>
          </div>
          <div class="arrowhead">
            <van-icon
              name="arrow"
              :size="20"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { Hamburg, Line } from '../../ui-library/easy-components.tsx'
import Header from '../../ui-library/header.vue'
import Envelope from './envelope.vue'
const envelopeSource = ref({})

type EnvelopeMap = {
  [index: string]: {
    key?: string
    placeholder: string
  }[]
}
const envelopeMap = reactive<EnvelopeMap>({
  group: [
    {
      placeholder: '输入红包个数'
    },
    {
      placeholder: '输入红包总数'
    }
  ],
  friends: [
    {
      placeholder: '请输入单个金额'
    }
  ]
})

const type = ref('group')
</script>
<style lang="scss" scoped>
.content {
  @apply h-full w-full bg-[var(--home-message-content-bg)];
  .top {
    @apply w-full bg-[var(--home-header-bg)];
  }

  main {
    @apply w-full flex flex-col;
    height: calc(100% - 64px);
    .envelope-send {
      @apply flex-1  px-[40px] py-[20px];
      .balance-content {
        @apply w-full  py-[20px];
        .balance {
          @apply w-full flex justify-center items-center;
          .balance-text {
            @apply text-[25px] text-black font-bold;
          }
          .balance-number {
            @apply text-[35px] text-[#F73D39];
          }
        }
      }
      :deep(.van-field) {
        @apply text-[16px] rounded-[8px] py-[15px] px-[10px] bg-[#F0F1F6];
        box-shadow:
          1px 1px 10px -2px #d5d1d1 inset,
          1px 1px 10px -2px #edeef3 inset,
          0px 0px 10px -2px #eff0f5 inset,
          1px 1px 10px -2px #e7e8ed inset;
      }
      :deep(input::placeholder) {
        color: #97989d;
        font-size: 18px;
      }
      .envelope-form {
        .envelope-number-content {
          @apply w-full  py-[12px];
          .envelope-number {
            @apply text-[24px] text-black h-[40px] mb-[15px];
          }
        }
        .button-content {
          @apply w-full flex justify-between items-center h-[50px] mt-[15px] mb-[20px];
          .authorization,
          .stuffed {
            @apply w-[45%] h-[45px] text-white bg-[#2368F4] leading-[45px] text-center rounded-[8px] text-[16px] font-bold;
          }
          .stuffed {
            @apply bg-[#F53231];
          }
        }
      }
      .envelope-cover {
        @apply w-full flex justify-between items-center h-[50px] mt-[20px] mb-[20px]  leading-[50px]   rounded-lg px-[15px] text-[#333333] font-bold;
        .text {
          @apply flex items-center;
          img {
            @apply w-[20px] mr-[10px];
          }
        }

        border: 1px solid #d8d8d8;
      }
    }
  }
}
</style>
