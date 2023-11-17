import { Ref, FunctionalComponent } from 'vue'
import { Badge } from 'vant'

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
