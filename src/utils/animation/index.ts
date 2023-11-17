type Options = {
  duration: number
  from: number
  to: number
}
export const animation = (options: Options, callBack: (value: number) => void) => {
  const { duration, from, to } = options
  const speed = (to - from) / duration // 速度 = 总距离 / 总时间
  const startTimestamp = Date.now()
  let value = from
  const __run = () => {
    const now = Date.now()
    const time = now - startTimestamp
    value = from + speed * time
    callBack && callBack(value)
    if (time >= duration) {
      callBack && callBack(value)
      value = to
      return
    }
    requestAnimationFrame(__run)
  }
  __run()
}
