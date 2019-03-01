import axios from 'axios'

const activityApi = {
  testlog: function () {
    console.log('testlog')
  },
    /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore: function (payload) {
    axios
      .get(`/api/products/${payload}`)
      // .then((res) => {
      //   console.log('2222222', res)
      // }).catch(err => {
      //   console.log(err)
      // })
  }
}
export default activityApi
