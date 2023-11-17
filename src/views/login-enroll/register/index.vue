<template>
  <div class="content">
    <LoginEnrollHeader />
    <main>
      <div class="logo-container">
        <div class="logo" />
        <div class="text">链世界</div>
      </div>
      <div class="form-container">
        <div class="title">注册GAS账号</div>
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
                  <div class="label">私钥</div>
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
            <van-field
              v-model="value"
              readonly
              placeholder="顶部对齐"
              label-align="top"
            >
              <template #label>
                <div class="label-content">
                  <div class="label">私钥</div>
                  <van-icon
                    class-prefix="icon"
                    size="22"
                    color="#79A4FF"
                    name="fuzhi"
                  />
                </div>
              </template>
            </van-field>
          </div>
          <div class="password-content">
            <van-field
              v-model="value"
              placeholder="请输入密码"
              label-align="top"
            />
            <van-field
              v-model="value"
              placeholder="请再次输入密码"
              label-align="top"
            />
          </div>
          <div class="tip">提示：此密钥密码为登陆用，如忘记需要重新注册</div>
        </div>
      </div>
      <div class="sure-content">
        <div class="sure">确定</div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  @apply h-full w-full;
  background: linear-gradient(to bottom, #0e6dae, #072d63);
  font-family: var(--font-family-text);
  main {
    @apply h-full w-full;
    .logo-container {
      @apply h-[10%] w-full pt-5;
      .logo {
        @apply h-[80px] w-[80px] bg-[url(@/assets/image/enroll/regiestlogo.png)] m-auto bg-center bg-no-repeat;
        background-size: 100%;
      }
      .text {
        @apply text-white text-[20px]  text-center leading-3 tracking-[2px];
      }
    }
    .form-container {
      @apply w-[80%] m-auto bg-white mt-[40px] rounded-[20px] overflow-hidden py-[20px] overflow-y-auto;
      .title {
        @apply py-[5px] w-full text-center text-[20px] font-[600];
      }
      .form {
        .keys {
          :deep(.van-field__control) {
            @apply py-[3px] rounded-md bg-[#EDEDED] px-1.5 mt-[3px];
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
        .password-content {
          :deep(.van-field__control) {
            @apply py-[6px] rounded-md bg-[#EDEDED] px-3 mt-[3px] font-bold text-[14px];
            box-shadow: 0 5px 6px -5px rgba(0, 0, 0, 0.4) inset;
          }
          :deep(.van-cell) {
            &:after {
              display: none;
            }
          }
        }
        .tip {
          @apply text-[#A2A2A1] text-[14px] px-4;
        }
      }
    }
    .sure-content {
      @apply mt-5 w-full;
      .sure {
        @apply w-[80%] py-[8px] bg-black m-auto rounded-lg text-center font-bold text-white;
        background: linear-gradient(to top, #1e64e8, #0889fc);
        box-shadow: 1px 5px 10px -3px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
