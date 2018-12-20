const utils = {
  timestampToTime: function (timestamp) {
    let newDate = new Date()
    newDate.setTime(timestamp * 1000)
    return newDate.toLocaleString()
  },
  chatUnixTodateFn: function (unix) {
    let date = new Date(Number(unix))
    let date1 = ''
    if (new Date(Number(unix)).toDateString() === new Date().toDateString()) {
      date1 += (date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()) + ':' +
        (date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes())
    } else if (new Date(Number(unix)) < new Date()) {
      date1 += date.getFullYear() + '.' +
        (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.' +
        (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()) + ' '
    }
    return date1
  },
  // 判段是否为空格符
  isNull: function (str) {
    if (str.match(/^\s*$/)) {
      return true
    }
  },
  ConvertBytesToMB: function (bytes) {
    if (Number(bytes) === 0) return '0B'
    let k = 1024
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = Math.floor(Math.log(bytes) / Math.log(k))
    return (bytes / Math.pow(k, i)).toPrecision(4) + ' ' + sizes[i]
  },
  ConvertGMTToStr: function (updateTime) {
    let date = new Date(updateTime * 1000)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    minute = minute < 10 ? ('0' + minute) : minute
    let str = y + '-' + m + '-' + d + ' ' + h + ':' + minute
    return str
  },
  // 判断特殊字符
  special: function (str) {
    let regEn = /[<>|*?/]/
    return regEn.test(str)
  },
  largeuint8ArrToString (uint8arr, type, callback) {
    let bb = new Blob([uint8arr])
    let f = new FileReader()
    f.onload = function (e) {
      callback(e.target.result)
    }
    if (type === 'img') {
      f.readAsDataURL(bb)
    } else {
      f.readAsText(bb)
    }
  },
    /**
   * [getQueryString 获取url参数]
   * @param  {[type]} name [参数key]
   */
  getQueryString: function (name) {
    console.log(name)
    let _str = window.location.href.split('?')[1]
    if (!_str) {
      return
    }
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = _str.match(reg)
    if (r != null) return unescape(r[2]); return null
  },
  /**
   * Time formatting
   */
  formatTime (time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    if (Object.prototype.toString.call(time) === '[object String]') {
      return time
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (time === 'date') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(parseInt(time))
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return timeStr
  }
}
export default utils
