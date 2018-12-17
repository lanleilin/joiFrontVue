<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/unicorn_logo.png" alt="">
      </a>
      <a href="#">
        <div class="user-info">
          <strong>
            Joi <span v-if="mold === 'quote'">sing a song</span>
          </strong>
          <div class="timestamp">{{time}}</div>
        </div>
      </a>
    </div>
    <div v-if="mold === 'quote'" class="article-card">
      <div class="title">
        相忘于江湖
      </div>
      <div class="detail">

        OH——说尽了只剩一杯酒

        OH——若醉了不过一滴泪

        OH——看你不由衷的样子

        OH——任时间风干眼泪却磨不掉孤独

        我不怕红尘可笑，笑不尽无聊

        谁能够穿过岁月不老

        眼泪于谁去凭吊，谁又能知道

        若与你痴做一场梦也好

        反正最后是忘掉，谁忆今朝笑

        何苦追问着情犹难了

        不如把一杯高歌，我放声地歌

        谁能听到谁又能够与我附和
        
      </div>
    </div>
    <p v-if="mold === 'comment'" class="comment">
      谁能穿过岁月不老
    </p>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span v-if="mold === 'quote'" class="btn comment"><i>0</i></span>
      <span v-if="mold === 'quote'" class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    mold: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      time: new Date().toLocaleDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 0 0 2rem 5rem;
  margin: 2rem 1.8rem;
}

.desc {
  margin-left: -5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
}

.user-info {
  display: inline-block;

  strong {
    font-size: 1.7rem;
    line-height: 1;
    color: #494949;

    span {
      color: #aaa;
      font-weight: normal;
    }
  }

  .timestamp {
    font-size: 1.4rem;
    margin-top: 0.6rem;
    line-height: 1;
    color: #aaa;
  }
}

.article-card {
  margin: 1rem 0 2rem 0;
  padding: 1.5rem;
  border-radius: 0.2rem;
  border: solid 0.1rem #d8d8d8;

  .title {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.comment {
  line-height: 2.2rem;
  font-size: 1.5rem;
  color: #494949;
}

.info {
  span {
    margin-right: 2rem;
    font-size: 1.4rem;
  }

  .like::before {
    background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
  }

  .comment::before {
    background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
  }

  .retweet::before {
    background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
  }

  .more::before {
    background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: -0.2rem;
  }

  .more {
    float: right;
    margin-right: 0;
  }

  i {
    font-style: normal;
    color: #ccc;
    margin-left: 0.3rem;
    margin-top: -0.3rem;
  }
}

.btn::before {
  content: '';
  width: 2rem;
  height: 2rem;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: -0.4rem;
}

.card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.1rem;
  background: #E8E8E8;
}
</style>
