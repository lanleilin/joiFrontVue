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
    // Mock data
    let dataA = [
      {
        title: 'hear me roar',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '43736',
        group_topic: {
          title: 'by what right a wolf judges a lion',
          time: '3分钟前更新：'
        }
      },
      {
        title: '苟利国家生死以',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '53736',
        group_topic: {
          title: '岂因祸福避趋之',
          time: '刚刚更新：'
        }
      },
      {
        title: 'unbent unbow unbroken',
        subtype: 'group',
        id: 1234,
        images: {
          small: '/static/images/cat/unbentUnbowUnbroken.jpg'
        },
        group_member: '4373',
        group_topic: {
          title: 'go on,do you duty',
          time: '刚刚更新：'
        }
      }
    ]
    let dataB = [
      {
        title: 'everything you want to hear',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '431999',
        group_topic: {
          title: 'quiet an experience to live in fear,is\'t it?',
          time: '4分钟前更新：'
        }
      },
      {
        title: 'fiery the angels fell',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '96960',
        group_topic: {
          title: 'deep thunder rolled near their shores',
          time: 'burning with the fire of Orc'
        }
      },
      {
        title: 'fire and blood',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '43736',
        group_topic: {
          title: 'so please tell me where before there is nothing but love',
          time: '3分钟前更新：'
        }
      }
    ]
    let dataC = [
      {
        title: 'relax,take it easy',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '431999',
        group_topic: {
          title: 'you ve been wonderful in all that you can be',
          time: 'but it hurts when you say you understand me'
        }
      },
      {
        title: 'when play the game of thrones',
        subtype: 'group',
        id: 1234,
        images: {
          small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
        },
        group_member: '96960',
        group_topic: {
          title: 'you live or you die,there is no middle ground',
          time: '1小时前更新：'
        }
      },
      {
        title: 'one taste of real world',
        subtype: 'group',
        id: 1234,
        images: {
          small: '/static/images/cat/weDoNotSaw.jpg'
        },
        group_member: '743736',
        group_topic: {
          title: '',
          time: 'from this day,until my last day'
        }
      }
    ]
    // Simulate time out
    setTimeout(() => {
      commit({
        type: 'getGroup',
        tag: 'a',
        res: dataA
      })
    }, 1000)
    setTimeout(() => {
      commit({
        type: 'getGroup',
        tag: 'b',
        res: dataB
      })
    }, 3000)
    setTimeout(() => {
      commit({
        type: 'getGroup',
        tag: 'c',
        res: dataC
      })
    }, 200)
  }
}

export default {
  state,
  mutations,
  actions
}
