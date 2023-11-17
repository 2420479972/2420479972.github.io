import { showSuccessToast, showFailToast } from 'vant'

export async function copyTextToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    showSuccessToast({
      message: '复制成功',
      duration: 1000
    })
  } catch (err) {
    console.error('Unable to copy to clipboard', err)
    showFailToast('复制失败')
  }
}
