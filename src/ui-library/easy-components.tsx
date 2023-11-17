import { Ref, FunctionalComponent } from 'vue'
import { Badge, Icon, Switch } from 'vant'
import { copyTextToClipboard } from '../utils/base/copy.ts'

type Props = {
  offset?: [number, number]
  showDot?: boolean
}

export const Hamburg: FunctionalComponent<Props> = (props: { offset?: [number, number]; showDot?: boolean }) => {
  const showSetting = inject<Ref<boolean>>('showSetting') as Ref<boolean>
  const cutSettingMenuShow = () => {
    showSetting.value = !showSetting?.value
  }
  const offset = props.offset || [-5, 8]
  return (
    <Badge
      dot={props.showDot}
      offset={offset}
    >
      <div
        class="h-[40px] w-[40px] flex flex-col space-y-1.5 items-center justify-center relative"
        onClick={cutSettingMenuShow}
      >
        {[1, 2, 3].map((item) => (
          <div
            class="h-[2px] w-[25px] bg-white"
            key={item}
          ></div>
        ))}
      </div>
    </Badge>
  )
}

export const Line = () => {
  return <div class="line  h-[5px] bg-[var(--home-message-item-boder-color)] w-full" />
}

import QR from './qr-code.png'

export const QrCode = (props: any, { slots }: any) => {
  return (
    <div class="w-full h-[200px]  flex flex-col mt-[15px] items-center justify-center">
      <div class="w-[150px] h-[150px] text-center leading-[150px] text-[#88888A] text-[18px] font-[600]">
        <img
          src={QR}
          class="w-full"
          alt=""
        />
      </div>
      <div class="text-[#000] text-[20px] font-[600] mt-[15px]">{slots.default && slots.default()}</div>
    </div>
  )
}

export const Popularize = (props: any, { emits }: any) => {
  const copy = () => {
    copyTextToClipboard('0x1234567890')
    emits('copy')
  }
  return (
    <div class="px-[15px] pt-[10px] pb-[20px] bg-[#EFEFF5] rounded-[10px]">
      <div class="flex items-center justify-between">
        <div class="text-[22px] font-[400]">推广链接：</div>
        <Icon
          class-prefix="icon"
          name="fuzhi"
          onClick={copy}
          size="20"
          color="#0074FE"
        />
      </div>
      <div
        class="text-[#404144] text-[12px] font-[400] mt-[5px]"
        style="word-wrap: break-word;"
      >
        =auto2zh#en/zh/calling%20any%20method%20that%20interact%20with%20the%20network%20would%20involve%20using%20the%20early%20passed%20provider.
      </div>
    </div>
  )
}

export const Operate = () => {
  return (
    <div class="flex w-full justify-between py-[5px] items-center   bg-white  px-[20px]">
      <div class="flex items-center text-black">
        <div class="h-[35px] w-[35px] bg-[#2268F4] flex items-center justify-center rounded-full mr-[10px]">
          <Icon
            class-prefix="icon"
            name="suoding"
            size="20"
            color="#fff"
          />
        </div>
        <div class="text">个人隐私</div>
      </div>
      <Switch size="22px" />
    </div>
  )
}
