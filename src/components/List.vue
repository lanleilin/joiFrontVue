<template>
  <div class="list">
    <div v-if="isDelDialog" class="modal-wrapper" >
      <div class="modal-dialog">
        <div class="modal-msg">
          <p v-if="formTip.type==='error'" class="tip msgError">{{formTip.msg}}</p>
          <p v-if="formTip.type==='success'" class="tip msgSuccess">{{formTip.msg}}</p>
        </div>
        <div class="modal-btn">
          <span :class="[{'blue-btn-md':selectedOpr===0},{'gray-btn-md':selectedOpr!==0}]" v-if="formTip.type!=='success'" @click="moreOperate('delete')">删除</span>
          <span :class="[{'blue-btn-md':selectedOpr===1},{'gray-btn-md':selectedOpr!==1}]" v-if="formTip.type!=='success'" @click="moreOperate('done')">DONE</span>
        </div>
        <div class="modal-btn">
          <span class="navy-btn-md" v-if="formTip.type!=='success'" @click="confirmOpr()">确认</span>
          <span class="gray-btn-md" @click="cancealDel()">close</span>
        </div>
        
      </div>
    </div>
    <template v-if="mold === 'thumbnail'" v-for="(item ,index) in items">
      <div class="thumbnail">
        <div class="content">
          <!-- <router-link
            :to="{name: 'DetailView', params: { 'id':index }}">
            <img :src="imgSrc" alt="cover">
          </router-link> -->
          <img :src="imgSrc" @click="goDetail(item.id,index)" alt="cover">
          <h3 class="note-title">{{item.name}}</h3>
          <p class="note-des">{{item.manufacturer}}</p>
        </div>
        <div class="author">
          <span class="created-at">{{formatTime(item.createdAt)}}</span>
          <!-- <span class="created-at">{{item.createdAt}}</span> -->
          <div class="label">
            <span class="gray-btn-sm" @click="showDelModal(item.id)">MORE</span>
            <a :href="item.price" target="blank" class="address blue-btn-sm">link</a>
          </div>
        </div>
      </div>
    </template>
    <template v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="item in items" >
          <a href="#">
            <h3>{{item.name}}</h3>
            <div class="info">{{item.name}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'list',
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDelDialog: false,
      oprIndex: '',
      selectedOpr: '',
      noteFrom: {
        id: ''
      },
      formTip: {
        type: '',
        msg: ''
      },
      // imgSrc: '/static/images/cat/hearMeRoar.jpg'
      imgSrc: 'https://upload-images.jianshu.io/upload_images/13937645-9b2024bb2952d936.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp'
    }
  },
  methods: {
    goDetail (id, index) {
      console.log('iiiiiiddddddddd', this.items[index])
      this.$store.dispatch('clearTimeline').then(res => {
        this.$router.push({
          path: 'detail',
          query: {
            id: id,
            type: '0'
          }
        })
      })
    },
    showDelModal (id) {
      this.noteFrom.id = id
      this.isDelDialog = true
    },
    moreOperate (type) {
      switch (type) {
        case 'delete':
          this.deleteOpr()
          break
        case 'done':
          this.doneOpr()
          break
        default:
      }
    },
    deleteOpr () {
      this.selectedOpr = 0
    },
    doneOpr () {
      this.selectedOpr = 1
    },
    confirmOpr () {
      switch (this.selectedOpr) {
        case 0:
          this.confirmDel()
          break
        case 1:
          this.confirmDone()
          break
        default:
      }
    },
    confirmDone () {
      let _data = {
        id: this.noteFrom.id,
        type: this.selectedOpr
      }
      this.$store.dispatch('updateGender', _data).then(res => {
        this.loadMore(0)
        this.formTip = {
          type: 'success',
          msg: 'ssssssuccess'
        }
        this.loadMore(0)
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
      })
    },
    confirmDel () {
      this.$store.dispatch('updateNote', this.noteFrom).then(res => {
        this.loadMore(0)
        this.formTip = {
          type: 'success',
          msg: 'ssssssuccess'
        }
        this.loadMore(0)
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
      })
    },
    cancealDel () {
      this.formTip['type'] = ''
      this.isDelDialog = false
    },

    formatTime (time) {
      return this.$utils.formatTime(time)
    },
    ...mapActions(['loadMore'])
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
.list {
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
    
    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    .note-title {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 600;
      color: #1a1a1a;
      width: 62%;
    }

    .note-des {
      line-height: 1.5;
      text-align: justify;
      color: #1a1a1a;
      font-size: 1.2rem;
      word-wrap: break-word;
      // overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      // height: 8.678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size: 1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #337ab7;
    }
  }
}
</style>
