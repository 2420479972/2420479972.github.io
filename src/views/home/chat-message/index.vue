<template>
  <main>
    <Header title="皱皱" />
    <div class="chat">
      <div class="chat-main">
        <template
          v-for="item in messageList"
          :key="item.id"
        >
          <div
            class="chat-ls"
            v-if="item.type === 'left'"
          >
            <div class="timer">2020-10-1</div>
            <div class="msg-m msg-left">
              <div class="user-img">
                <img
                  src="https://img1.baidu.com/it/u=898692534,2766260827&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699290000&t=9ce68fd7e97059401b335ca8bf992f95"
                  alt=""
                />
              </div>
              <div class="message">
                <div class="msg-content">
                  你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间
                </div>
              </div>
            </div>
          </div>
          <div
            class="chat-ls"
            v-else
          >
            <div class="timer">2020-10-1</div>
            <div class="msg-m msg-right">
              <div class="user-img">
                <img
                  src="https://img0.baidu.com/it/u=2806436279,2899867017&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699290000&t=90a6fe2187bcb404099c9ca140a9044a"
                  alt=""
                />
              </div>
              <div class="message">
                <div class="msg-content">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <SendMessage />
  </main>
</template>
<script lang="ts" setup>
import SendMessage from '@views/home/chat-message/send-message.vue'

const messageList = [
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    type: 'left',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    type: 'left',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content:
      '你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老，阿萨德就发了空间你好久将拉萨江东父老',
    time: '2020-10-1',
    avatar: '../assets/images/user.png'
  },
  {
    id: 1,
    content: '父老',
    time: '2020-10-1',
    avatar: '../assets/images/user.png'
  }
]
</script>
<style lang="scss" scoped>
main {
  height: 100%;
  width: 100%;
  background: #ebebeb;
  display: flex;
  flex-direction: column;
  .chat {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    &-main {
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    &-ls {
      .timer {
        text-align: center;
        color: #999;
        font-size: 16px;
        line-height: 20px;
        padding: 20px 0;
      }
      .msg-m {
        display: flex;
        padding: 20px 0;
        .user-img {
          height: 55px;
          width: 55px;
          background: red;
          border-radius: 5px;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        .message {
          max-width: calc(100% - 65px * 2);
          .msg-content {
            font-size: 20px;
            line-height: 35px;
            color: rgb(39, 40, 50);
            padding: 14px 18px;
          }
        }
      }
      .msg-left {
        flex-direction: row;
        .user-img {
          margin-right: 10px;
        }
        .message {
          background: #fff;
          border-radius: 0 15px 15px 15px;
        }
      }
      .msg-right {
        flex-direction: row-reverse;
        .user-img {
          margin-left: 10px;
        }
        .message {
          background: rgb(87, 232, 48);
          border-radius: 15px 0 15px 15px;
        }
      }
    }
  }
}
</style>
