<template>
  <div class="list">
    <div v-if="isDelDialog" class="modal-wrapper" >
      <div class="modal-dialog">
        <div class="modal-msg">
          <p v-if="formTip.type==='error'" class="tip msgError">{{formTip.msg}}</p>
          <p v-if="formTip.type==='success'" class="tip msgSuccess">{{formTip.msg}}</p>
        </div>
        <div class="modal-btn">
          <span class="gray-btn" @click="confirmDel()">确认删除</span>
          <span class="blue-btn" @click="cancealDel()">close</span>
        </div>
        
      </div>
    </div>
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <div class="thumbnail">
        <div class="content">
          <router-link
            :to="{name: 'DetailView', params: { id: item.id }}">
            <img :src="imgSrc" alt="cover">
          </router-link>
          <h3 class="note-title">{{item.name}}</h3>
          <p class="note-des">{{item.manufacturer | subStr}}</p>
        </div>
        <div class="author">
          <span class="created-at">{{item.createdAt}}</span>
          <!-- <span class="created-at">{{item.createdAt}}</span> -->
          <div class="label">
            <span class="gray-btn" @click="showDelModal(item.id)">删除</span>
            <a :href="item.price" target="blank" class="address blue-btn">link</a>
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
import utils from '../utils/kit.js'

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
      noteFrom: {
        id: ''
      },
      formTip: {
        type: '',
        msg: ''
      },
      imgSrc: '/static/images/cat/hearMeRoar.jpg'
    }
  },
  methods: {
    showDelModal (id) {
      this.noteFrom.id = id
      this.isDelDialog = true
    },
    confirmDel () {
      this.$store.dispatch('updateNote', this.noteFrom)
      // this.isDelDialog=false
      this.$store.dispatch('updateNote', this.noteFrom).then(res => {
          // success close panel
        this.loadMore()
        this.formTip = {
          type: 'success',
          msg: 'ssssssuccess'
        }
        this.loadMore()
      }).catch(error => {
        this.formTip = {
          type: 'error',
          msg: error
        }
        console.log('ccccccccreateNote err', error)
      })
    },
    cancealDel () {
      this.isDelDialog = false
    },
    formatTime (time) {
      return utils.formatTime(time)
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

  .note-title{
    color: #1a1a1a;
    font-weight: 600;
  }
  .note-des{
    color: #1a1a1a;
  }
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
    
    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 600;
      color: #1a1a1a;
      width: 62%;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #1a1a1a;
      font-size: 1.2rem;
      overflow: hidden;
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
