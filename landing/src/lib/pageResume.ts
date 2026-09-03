// ZERO-ONE 二开保护：三类官网数据共享页面恢复事件，不读取或传播 Console 凭据。
export function subscribePageResume(refresh: () => void): () => void {
  const resume = () => {
    if (!document.hidden) refresh()
  }
  const restore = (event: PageTransitionEvent) => {
    if (event.persisted) resume()
  }
  document.addEventListener('visibilitychange', resume)
  window.addEventListener('pageshow', restore)
  window.addEventListener('online', resume)
  window.addEventListener('focus', resume)
  return () => {
    document.removeEventListener('visibilitychange', resume)
    window.removeEventListener('pageshow', restore)
    window.removeEventListener('online', resume)
    window.removeEventListener('focus', resume)
  }
}
