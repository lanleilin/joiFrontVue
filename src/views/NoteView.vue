<template>
  <div class="note-view">
    <template v-if="isComplete">
      <h1 class="title">注册成功</h1>
      <p class="tip">继续create</p>
    </template>
    <template v-else>
      <h1 class="title">Note</h1>
      <form>
        <p v-if="error" class="tip error">{{error}}</p>
        <div class="form-alias">
          <label>
            <strong>标题</strong>
            <input
              v-model.trim="noteFrom.title"
              type="text"
              name="title"
              placeholder="标题">
          </label>
        </div>
        <div class="form-pwd">
          <label>
              <strong>描述</strong>
                <input
                v-model.trim="noteFrom.description"
                type="text"
                name="description"
                placeholder="描述">
          </label>
        </div>
        <div class="form-name">
          <label>
            <strong>地址</strong>
            <input
              v-model.trim="noteFrom.address"
              type="text"
              name="address"
              placeholder="地址">
          </label>
        </div>
        <div class="form-submit">
          <button
            class="submit"
            type="button"
            @click="createNote()"
            :disabled="isDisabled"
            :class="{disabled: isDisabled}">
            {{noteState}}
          </button>
        </div>
      </form>
      <div class="footer">
        <div class="agreement">我信了你的鬼，你这个喵喵坏的很</div>
        <div class="btns">
          <router-link :to="{name: 'HomeView'}" replace>JOI HOME</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'note-view',
  data () {
    return {
      isComplete: false,        // Registration completed
      isDisabled: false,        // Disabled submit button
      noteState: '创建',
      error: '',                // Verification results
      noteFrom: {
        title: '',
        description: '',
        address: ''
      }
    }
  },
  methods: {
    createNote () {
      // console.log(this.noteFrom)
      this.$store.dispatch('/activities/createNote', this.noteFrom)
      // this.createNote(this.noteFrom)
    },
    ...mapActions(['createNote'])
  }
}
</script>

<style lang="scss" scoped>
.note-view {
  h1 {
    margin: 10% 0 9%;
    font-size: 4rem;
    font-weight: 300;
    color: #337ab7;
    text-align: center;
  }

  form {
    padding: 2rem 1.5rem;

    strong {
      font-size: 1.5rem;
      color: #222;
      display: none;
      margin-bottom: 0.5rem;
    }

    input::placeholder {
      color: #ccc;
    }

    input[type="text"]{
      display: inline-block;
      width: 100%;
      height: 4.4rem;
      padding: 0 0.8rem;
      box-sizing: border-box;
      font-size: 1.5rem;
      background: #fff;
      border: 0.1rem solid #ccc;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
      outline: 0;
    }

    .form-pwd input, .form-name input {
      padding-right: 4rem;
      border-top: 0;
    }

    .form-pwd {
      position: relative;
    }

    .submit {
      cursor: pointer;
      width: 100%;
      padding: 1.2rem 2.6rem;
      margin-top: 1rem;
      font-size: 1.7rem;
      text-align: center;
      color: #fff;
      background: #337ab7;
      border: 0.1rem solid #337ab7;
      border-radius: 0.3rem;
    }

    .disabled {
      cursor: not-allowed;
      background: #eee;
      border: none;
    }

    .tip {
      font-size: 1.4rem;
      color: #aaa;
    }

    .error {
      color: #ff0000;
    }
  }

  .footer {
    .agreement {
      font-size: 1.4rem;
      color: #aaa;
      text-align: center;
    }

    .btns {
      margin-top: 4rem;
      text-align: center;
      font-size: 1.5rem;

      a {
        color: #337ab7;
        margin-right: 1.5rem;
      }
    }
  }
}
</style>
