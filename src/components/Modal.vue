<template>
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
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'modal',
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
    ...mapActions(['loadMore'])
  }
}
</script>

<style lang='scss' scoped>

</style>
