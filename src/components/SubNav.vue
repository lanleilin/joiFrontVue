<template>
  <div class="sub-nav">
   
    <div v-if="msgObj.type==='error'" class="msgDialogErr msgError">
      <h1>{{msgObj.msg}}</h1>
    </div>
     <div v-if="msgObj.type==='success'" class="msgDialog msgSuccess">
      <h1>{{msgObj.msg}}</h1>
    </div>
    <!-- Bottom nav -->
    <div class="navBottom" v-if="mold === 'navBottom'">
      <div class="nav-item">
        <router-link :to="{name: 'RegisterView'}">注册帐号</router-link><!-- replace blank
        --><template v-if="currentUser.email">
          <a href="#" @click.prevent="logout()">退出登录</a>
        </template>
        <template v-else>
          <router-link :to="{name: 'LoginView'}" replace>登录Joi</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="#">使用桌面版</a><a href="#">JOI</a>
      </div>
    </div>
    <!-- Quick start nav -->
    <div class="quickNav" v-if="mold === 'quickNav'">
      <ul class="quick-nav">
        <li>
          <router-link :to="{name: 'NoteView'}">写Note</router-link>
        </li>
        <li>
          <a @click="clicklog()">clickme1</a>
          <!-- <router-link :to="{name: 'StatusView'}">欧美新碟榜</router-link> -->
        </li>
        <li>
          <router-link :to="{name: 'RegisterView'}">注册帐号</router-link>
        </li>
        <li>
          <template v-if="currentUser.email">
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template v-else>
            <router-link :to="{name: 'LoginView'}" replace>登录Joi</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import request from 'superagent'
import utils from '../utils/kit.js'

export default {
  name: 'sub-nav',
  props: {
    mold: {
      type: String,
      default: 'quickNav'
    }
  },
  data () {
    return {
      msgFlag: true,
      genderFlag: true,
      msgObj: {
        type: '',
        msg: ''
      }
    }
  },
  computed: {
    currentLink: function () {
      return this.currentUser.name ? 'StatusView' : 'LoginView'
    },
    holder: function () {
      return this.currentUser.name ? this.currentUser.name : '请先登录'
    },
    // Map store/user state
    ...mapGetters(['currentUser']),
    ...mapActions(['loadMore'])

  },
  methods: {
    clicklog () {
      let _type
      this.genderFlag=!this.genderFlag
      this.genderFlag?_type=1:_type=0
      // this.loadMore(_type)
      this.$store.dispatch('loadMore',_type).then(res => {
        console.log('in loadmore')
      })
    },
    formatTime (time) {
      return utils.formatTime(time)
    },
    logout () {
      this.$store.commit({
        type: 'logout'
      })
      this.$router.push({name: 'HomeView'})
    }
  },
  created () {
    // Get local user filling store/user
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getLocalUser'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.navBottom {
  width: 100%;
  border-bottom: 0.1rem solid #f3f3f3;

  .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
  }

  a {
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #337ab7;

    &:first-child {
      border-right: 0.1rem solid #e5e5e5;
    }
  }
}

.quickNav {
  ul {
    overflow: hidden;
    margin: 1rem 0 0 0;
    padding-top: 0.6rem;

    li {
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
</style>
