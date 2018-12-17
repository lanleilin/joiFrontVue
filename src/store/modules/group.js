import axios from 'axios'

const state = {
  group_a: [],
  group_b: [],
  group_c: []
}

const mutations = {
  getGroup (state, payload) {
    switch (payload.tag) {
      case 'a':
        state.group_a = payload.res
        break
      case 'b':
        state.group_b = payload.res
        break
      case 'c':
        state.group_c = payload.res
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

const actions = {
  getGroup ({ commit }, payload) {
    axios.get('/api/groups/dataA')
      .then((res) => {
        commit({
          type: 'getGroup',
          tag: 'a',
          res: res.data.groups
        })
      }).catch(err => {
        console.log(err)
      })
    axios.get('/api/groups/dataB')
      .then((res) => {
        commit({
          type: 'getGroup',
          tag: 'b',
          res: res.data.groups
        })
      }).catch(err => {
        console.log(err)
      })
    axios.get('/api/groups/dataC')
      .then((res) => {
        commit({
          type: 'getGroup',
          tag: 'c',
          res: res.data.groups
        })
      }).catch(err => {
        console.log(err)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
