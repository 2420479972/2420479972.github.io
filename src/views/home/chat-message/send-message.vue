<template>
  <div class="send-message">
    <div class="send-content">
      <div class="send-voice">
        <div class="voice">
          <img
            src="@assets/image/chat-message/voice.png"
            alt=""
          />
        </div>
      </div>
      <div class="send-text">
        <input type="text" />
      </div>
      <div class="operation">
        <div class="expression">
          <img
            src="@assets/image/chat-message/smile.png"
            alt=""
          />
        </div>
        <div
          class="more"
          @click="click"
        >
          <img
            src="@assets/image/chat-message/more.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="more-operation"
      :style="{ height: height }"
    />
  </div>
</template>
<script lang="ts" setup>
const height = ref('0px')

const click = () => {
  height.value = height.value === '0px' ? '20vh' : '0px'
}
</script>
<style lang="scss" scoped>
.send-message {
  width: 100%;
  min-height: 60px;
  background: rgba(210, 210, 210, 0.3);
  .send-content {
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    img {
      height: 80%;
    }
    .send-voice {
      height: 48px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      .voice {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: #cecece;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .send-text {
      height: 80%;
      width: calc(100% - 50px - 30px - 100px);
      margin-left: 10px;
      input {
        height: 100%;
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 18px;
      }
    }
    .operation {
      width: 110px;
      height: 48px;
      margin-left: 10px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .expression,
      .more {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .more-operation {
    width: 100%;
    height: 0;
    border-top: 1px solid #cecece;
    transition: height 0.3s linear;
  }
}
</style>
