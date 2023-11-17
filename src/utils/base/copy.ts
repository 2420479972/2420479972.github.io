import { showSuccessToast, showFailToast } from 'vant'

type StringKey = {
  [key: string]: (text: string) => void
}

export const copyTextToClipboard = (() => {
  let flag = ''
  if (navigator.clipboard) {
    flag = 'clipboard'
  } else if (document.execCommand) {
    flag = 'execCommand'
  }
  const map: StringKey = {
    clipboard: async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        showSuccessToast({
          message: '复制成功',
          duration: 1000
        })
      } catch (err) {
        showFailToast('复制失败')
      }
    },
    execCommand: (text: string) => {
      const input = document.createElement('input')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      showSuccessToast({
        message: '复制成功',
        duration: 1000
      })
    }
  }
  return map[flag]
})()
