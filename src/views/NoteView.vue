<template>
  <div class="note-view">
      <h1 class="title">Note</h1>
      <form>
        <p v-if="formTip" class="tip error">{{formTip}}</p>
        <div class="form-alias">
          <label>
            <strong>标题</strong>
            <input
              v-model.trim="noteFrom.title"
              type="text"
              name="title"
              :autofocus="true" 
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
              @keyup.enter="createNote()"
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
        <div class="agreement" @click="clearTip()">我信了你的鬼，你这个喵喵坏的很</div>
        <div class="btns">
          <router-link :to="{name: 'HomeView'}" replace>JOI HOME</router-link>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'note-view',
  data () {
    return {
      isComplete: false,        // Registration completed
      isDisabled: false,        // Disabled submit button
      noteState: '创建',
      formTip: '',                // noteForm error msg
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
      let form = this.noteFrom
      if (this.validateForm(form)) {
        this.$store.dispatch('createNote', form).then(res => {
          console.log('ccccccreateNote', res)
        }).catch(error => {
          console.log('ccccccccreateNote err', error)
        })
      }
      // this.$store.dispatch('createNote', form)
    },
    validateForm (form) {
      if (form.title === '' || form.description === '' || form.address === '') {
        this.formTip = '请填写完整'
        return false
      }
      return true
    },
    clearTip () {
      this.formTip = ''
    }
    // ...mapActions(['testlog'])
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
      outline: none;
    }

    .disabled {
      cursor: not-allowed;
      background: #eee;
      border: none;
    }

    .tip {
      font-size: 1.4rem;
      color: #aaa;
      text-align: center;
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
