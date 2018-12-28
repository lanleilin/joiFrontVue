
export default function isProduction () {
  if (
    process.env.NODE_ENV === 'production' &&
    location.host === 'www.lanleilin.club'
  ) {
    return true
  } else {
    return false
  }
}
window.user_host = isProduction()
  ? 'https://www.lanleilin.club/userapi/'
  : 'https://test.lanleilin.club/userapi/'
window.storage_host = isProduction()
  ? 'https://www.lanleilin.club/storageapi/'
  : 'https://test.lanleilin.club/storageapi/'
window.analysis_host = isProduction()
  ? 'https://www.lanleilin.club/analysisapi/'
  : 'https://test.lanleilin.club/analysisapi/'

// window.alipayment_host = isProduction()
//   ? 'https://www.lanleilin.club/alipayapi/'
//   : 'https://test.lanleilin.club/alipayapi/'
// window.wechatpayment_host = isProduction()
//   ? 'https://www.lanleilin.club/wechatpayapi/'
//   : 'https://test.lanleilin.club/wechatpayapi/'

