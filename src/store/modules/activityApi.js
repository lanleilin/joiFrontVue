import axios from 'axios'

const activityApi = {
  testlog: function () {
    console.log('testlog')
  },
  testTimeout: function (time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aya')
      }, time)
    })
  },
    /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore: function (payload) {
    return new Promise((resolve, reject) => {
      axios
      .get(`/api/products/${payload}`)
      .then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default activityApi
