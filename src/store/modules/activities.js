import request from 'superagent'

const state = {
  events: [],
  temp: [],
  eventItem: {},
  timeline: []
}

const mutations = {
  loadMore (state, payload) {
    // state.events = state.events.concat(payload.res)
    // state.events = payload.res
    let loadArr = []
    for (let i = 0; i < payload.res.length; i++) {
      if (payload.res[i].name) {
        loadArr.push(payload.res[i])
      }
    }
    state.events = loadArr
  },
  getTimeline (state, payload) {
    state.timeline = JSON.parse(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {

  /**
   * updateNote
   * new Promise((resolve, reject) => {})
   */
  updateNote ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      request
        .put('/api/products/' + payload.id)
        .then(res => {
          console.log('updateNote', res)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * createNote
   * new Promise((resolve, reject) => {})
   */
  createNote ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      request
        .post('/api/products')
        .send({
          name: payload.title,
          manufacturer: payload.description,
          price: payload.address,
          timeline: JSON.stringify(payload.timeline)
        })
        .then(res => {
          console.log('createNote', res)
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
    request
      .get('/api/products')
      .end((err, res) => {
        if (!err) {
          console.log('apires', res.body.products)
          commit({
            type: 'loadMore',
            res: res.body.products
          })
        }
      })
  },
  /**
   * getTimeline
   * skip: 3 default
   * count: 3 default
   */
  getTimeline ({commit}, payload) {
    request
      .get(`/api/timeline/${payload}`)
      .end((err, res) => {
        if (!err) {
          let _timeline
          if (!res.body.timeline.length) {
            // dummy data
            let dummyTimeline = [{
              status: 'done',
              time: 1545104763137,
              stage: 'mock start'
            }, {
              status: 'pending',
              time: 1545104763137,
              stage: 'dummy end'
            }]
            _timeline = JSON.stringify(dummyTimeline)
          } else {
            // _timeline = res.body.timeline
            _timeline = res.body.timeline[0]['timeline']
          }
          commit({
            type: 'getTimeline',
            res: _timeline
          })
        }
      })
  },
  /**
   * updateTimeline
   * new Promise((resolve, reject) => {})
   */
  updateTimeline ({ commit }, payload) {
    let _data = {
      id: payload.id,
      timeline: JSON.stringify(payload.timeline)
    }
    return new Promise((resolve, reject) => {
      request
        .post('/api/updateTimeline')
        .send(_data)
        .then(res => {
          console.log('updateTimeline', res)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * updateGender
   * new Promise((resolve, reject) => {})
   */
  updateGender ({ commit }, payload) {
    let _data 
    payload=='done'?_data=1:_data=0;
    console.log('_data',_data)
    return new Promise((resolve, reject) => {
      request
        .post('/api/updateGender')
        .send(_data)
        .then(res => {
          console.log('updateGender', res)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * Getting single event
   * id: event id
   */
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('/api/products')
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
