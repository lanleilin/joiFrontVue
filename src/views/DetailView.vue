<template>
  <div class="detail-view has-header">
    <!-- <banner title="NOTE DETAIL"></banner> -->
    <div v-if="showStageDialog" class="modal-wrapper" >
      <div class="modal-dialog">
        <div class="modal-msg">
          <p v-if="formTip.type==='error'" class="tip msgError">{{formTip.msg}}</p>
          <p v-if="formTip.type==='success'" class="tip msgSuccess">{{formTip.msg}}</p>
        </div>
        <div class="line-form">
          <div class="ipt-wrapper">
            <input
              v-model.trim="lineForm.time"
              type="text"
              name="time"
              class="main-ipt"
              placeholder="time">
          </div>
          <div class="ipt-wrapper">
            <input
              v-model.trim="lineForm.stage"
              type="text"
              name="stage"
              class="main-ipt"
              :autofocus="true"
              @keyup.enter="confirmStage()"
              placeholder="stage">
          </div>
        </div>
        <div class="modal-btn">
          <span class="gray-btn-md" v-if="formTip.type!=='success'" @click="confirmStage()">确认</span>
          <span class="blue-btn-md" @click="cancelStage()">close</span>
        </div>
        
      </div>
    </div>
    <template v-if="!showLoading">
      <div class="time-line">
        <ul>
          <li v-for="(timeItem,index) in timeLine">
            <div class="line-time">{{formatTime(timeItem.time)}}</div>
            <div :class="{linePending:timeItem.status==='pending'}" class="line-id">
              <span>
                {{index}}
              </span>
            </div>
            <div class="line-stage">{{timeItem.stage}}</div>
          </li>
        </ul>
      </div>
      <div class="operate-bar">
        <ul>
          <li class="navy-btn-md" @click="showStage()">添加</li>
          <li class="darkgray-btn-md" @click="testlog()">done</li>
        </ul>
      </div>
      <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '../components/Banner'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'
import Loading from '../components/Loading'

export default {
  name: 'detail-view',
  components: { Banner, Tags, DownloadApp, Loading },
  data () {
    return {
      showLoading: true,
      showStageDialog: false,
      formTip: {
        type: '',
        msg: ''
      },
      lineForm: {
        time: '',
        stage: ''
      }
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.eventItem.content.replace(/<img.+?>/ig, '')
    },
    // Getting Vuex State from store/modules/activities
    ...mapState({
      eventItem: state => state.activities.eventItem,
      timeLine: state => state.activities.timeLine
    })
  },
  mounted () {
    this.getTimeline()
  },
  methods: {
    formatTime (time) {
      return this.$utils.formatTime(time)
    },
    testlog(){
      console.log('999',this.timeLine)
    },
    showStage () {
      let _now = new Date().getTime()
      this.lineForm.time = this.formatTime(_now)
      this.showStageDialog = true
    },
    cancelStage () {
      this.formTip['type'] = ''
      this.showStageDialog = false
    },
    confirmStage () {
      if (!this.lineForm.stage) {
        this.formTip['type'] = 'error'
        this.formTip['msg'] = 'enter stage'
        return
      }
      let lineObj = {
        status: 'pending',
        time: this.lineForm.time,
        stage: this.lineForm.stage
      }
      this.timeLine.push(lineObj)
      console.log('this.timeLine', this.timeLine)
      this.updateTimeline(this.timeLine)
    },
    getTimeline () {
      this.$store.dispatch('getTimeline').then(res => {
        console.log('gggggggetTimeline', res)
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
        console.log('getTimeline-err', error)
      })
    },
    updateTimeline (data) {
      this.$store.dispatch('updateTimeline', data).then(res => {
        console.log('uuuuuuuuupTimeline', res)
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
      })
    }
  },
  created () {
    // Getting route params
    const id = this.$route.params.id

    // Dispatching getSingleEvent
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then(res => {
      // Success handle
      this.showLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.operate-bar{
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  // border-bottom:1px solid #F0F2F7;
  ul{
    li{
      display: inline-block;
    }
  }
}
.line-form{
  margin: 10px 0;
}
.linePending{
  filter: grayscale(100%) !important; 
}
.time-line{
  ul{
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    background: #f6f6f6;
    li{
      padding: 1rem 0;
      float: left;
      div{
        width: 100%;
        text-align: center;
        padding: 2px 4px;
        box-sizing: border-box;
        color: #8590A6;
      }
    }
    .line-id{
      border-top: 2px solid #337ab7;
      position: relative;
      margin: 5px 0;
      height: 0;
      span{
        position: absolute;
        top: -9px;
        margin-left: -8px;
        height: 16px;
        width: 16px;
        border-radius: 16px;
        color:#fff;
        background: #337ab7;
      }
    }
  }
}

.info {
  margin: 1rem;

  h2 {
    margin: 2rem 0;
    font-weight: bold;
    color: #494949;
  }

  .badge {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    margin-bottom: 0.3rem;
    vertical-align: middle;
    line-height: 1.8rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #FF8263;
    border-radius: 0.2rem;
  }

  .poster {
    margin: 2rem auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 22rem;
      height: auto;
    }
  }
}

.describe {
  h2 {
    color: #337ab7;
  }

  .content {
    overflow: hidden;
    font-size: 1.4rem;
  }
}

</style>
