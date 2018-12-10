import request from 'superagent'
import jsonp from 'superagent-jsonp'

const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  
  /**
   * createNote
   * new Promise((resolve, reject) => {})
   */
  createNote (form) {
    console.log('form',form)
    return new Promise((resolve, reject) => {
      request
        .post('/api/products')
        .send({
          name: form.title,
          manufacturer: form.description,
          price: form.address
        })
        .then(res => {
          console.log('createNote',res)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore ({commit, state}) {
    // TODO
    request
      .get('/api/products')
      .end((err, res) => {
        if (!err) {
          console.log('apires',res.body.products)
          commit({
            type: 'loadMore',
            res: res.body.products
          })
        }
      })
  },
  /**
   * Getting single event
   * id: event id
   */
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.douban.com/v2/event/' + payload.id)
        .use(jsonp)
        .end((err, res) => {
          if (!err) {
            commit({
              type: 'getSingleEvent',
              res: res.body
            })
            resolve(res)
          }
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
