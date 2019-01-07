<template>
  <div class="detail-view has-header">
    <!-- add dialog -->
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
    <!-- add dialog -->
    <!-- modify dialog -->
    <div v-if="showModifyDialog" class="modal-wrapper" >
      <div class="modal-dialog">
        <div class="modal-msg">
          <p v-if="formTip.type==='error'" class="tip msgError">{{formTip.msg}}</p>
          <p v-if="formTip.type==='success'" class="tip msgSuccess">{{formTip.msg}}</p>
        </div>
        <div class="modal-btn">
          <span :class="[{'blue-btn-md':selectedStage===0},{'gray-btn-md':selectedStage!==0}]" v-if="formTip.type!=='success'" @click="stageOperate('lightup')">点亮</span>
          <span :class="[{'blue-btn-md':selectedStage===1},{'gray-btn-md':selectedStage!==1}]" v-if="formTip.type!=='success'" @click="stageOperate('darken')">置灰</span>
          <span :class="[{'blue-btn-md':selectedStage===2},{'gray-btn-md':selectedStage!==2}]" v-if="formTip.type!=='success'" @click="stageOperate('delete')">删除</span>
        </div>
        <div class="modal-btn">
          <span v-if="formTip.type!=='success'" class="navy-btn-md"  @click="confirmOperate()">comfirm</span>
          <span class="gray-btn-md" @click="closeOperate()">close</span>
        </div>
      </div>
    </div>
    <!-- modify dialog -->

    <template v-if="!showLoading">
      <div class="time-line">
        <ul>
          <li v-for="(timeItem,index) in timeline" @click="showModify(index)">
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
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'
import Loading from '../components/Loading'

export default {
  name: 'detail-view',
  components: { Tags, DownloadApp, Loading },
  data () {
    return {
      showLoading: true,
      // add dialog
      showStageDialog: false,
      // modify dialog
      showModifyDialog: false,
      stageIndex: '',
      selectedStage: '',
      // timeline: [],
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
      timeline: state => state.activities.timeline
    })
  },
  mounted () {
    this.getTimeline()
    this.getTimeline()
    // this.clearTimeline()
  },
  methods: {
    formatTime (time) {
      return this.$utils.formatTime(time)
    },
    getQueryString (name) {
      return this.$utils.getQueryString(name)
    },
    clearTimeline () {
      this.$store.dispatch('clearTimeline').then(res => {
        console.log('ininininin')
      })
    },
    testlog () {
      this.getTimeline()
    },
    hasSign (obj) {
      let reg = /^((?!%).)*$/
      let hasFlag = false
      for (let p in obj) {
        if (!reg.test(obj[p])) {
          hasFlag = true
        }
      }
      return hasFlag
    },
    showStage () {
      let _now = new Date().getTime()
      this.lineForm.time = this.formatTime(_now)
      // this.lineForm.time = _now
      this.showStageDialog = true
    },
    showModify (index) {
      this.stageIndex = index
      this.showModifyDialog = true
    },
    stageOperate (type) {
      switch (type) {
        case 'lightup':
          this.lightupStage()
          break
        case 'darken':
          this.darkenStage()
          break
        case 'delete':
          this.deleteStage()
          break
        default:
      }
    },
    closeOperate () {
      this.formTip['type'] = ''
      this.getTimeline()
      this.showModifyDialog = false
    },
    confirmOperate () {
      console.log('this.timeline', this.timeline)
      this.sendUpdate()
    },
    lightupStage () {
      this.selectedStage = 0
      this.timeline[this.stageIndex]['status'] = 'done'
    },
    darkenStage () {
      this.selectedStage = 1
      this.timeline[this.stageIndex]['status'] = 'pending'
    },
    deleteStage () {
      this.selectedStage = 2
      // this.timeline[this.stageIndex]
      this.timeline.splice(this.stageIndex, 1)
    },
    cancelStage () {
      this.formTip['type'] = ''
      this.getTimeline()
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
      this.timeline.push(lineObj)
      // console.log('this.timeline', this.timeline)
      this.sendUpdate()
    },
    sendUpdate () {
      console.log('in')
      let _data = {
        id: this.getQueryString('id'),
        timeline: this.timeline
      }
      this.updateTimeline(_data)
    },
    getTimeline () {
      let _lineId = this.getQueryString('id')
      console.log('_lineId', _lineId)
      this.$store.dispatch('getTimeline', _lineId).then(res => {
        console.log('22222', res)
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
      })
    },
    updateTimeline (data) {
      this.$store.dispatch('updateTimeline', data).then(res => {
        console.log('uuuuuuuuupTimeline', res)
        this.formTip['type'] = 'success'
        this.formTip['msg'] = 'ssssuccess'
        this.getTimeline()
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
    // const id = this.$route.params.id

    // // Dispatching getSingleEvent
    // this.$store.dispatch({
    //   type: 'getSingleEvent',
    //   id: id
    // }).then(res => {
    //   // Success handle
    this.showLoading = false
    // })
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
        height: 1.6rem;
        line-height: 1.6rem;
        width: 1.6rem;
        border-radius: 1.6rem;
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
