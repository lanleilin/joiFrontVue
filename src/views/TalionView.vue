<template>
  <div class="talion-view">
    <div class="header-bar">
      <span class="close-talion" @click="closeTalion">关闭</span>
      <form class="search" onsubmit="return false">
        <input
          type="search"
          name="query"
          v-model.trim.lazy="queryStr"
          @keyup.enter="goSearch()">
      </form>
    </div>
    <ul class="has-header">
      <li>
        <div>
          <a href="https://www.zhihu.com/" target="_blank">
            <strong style="color: rgb(35, 132, 232);">知乎</strong>
            <span>我的收藏</span>
          </a>
          <a href="https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en" target="_blank">
            <strong style="color: rgb(230, 70, 126);">翻译</strong>
            <span>谷歌翻译</span>
          </a>
          <a href="https://juejin.im/timeline" target="_blank">
            <strong style="color: rgb(159, 120, 96);">掘金</strong>
            <span>timeline</span>
          </a>
          <a href="https://home.cnblogs.com/u/rlann/" target="_blank">
            <strong style="color: rgb(225, 100, 77);">博客</strong>
            <span>博客园</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="https://www.baidu.com/" target="_blank">
            <strong style="color: rgb(122, 106, 219);">百度</strong>
            <span>emmmm</span>
          </a>
          <a href="https://m.bilibili.com/index.html" target="_blank">
            <strong style="color: rgb(42, 184, 204);">B站</strong>
            <span>bilibili</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <!-- <a href="#" target="_blank">
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a> -->
        <router-link :to="{ name: 'MusicView'}">
          <a href="javascript:" target="_blank" @click="closeTalion">
        	  <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
        </router-link>
        <router-link :to="{ name: 'HomeView'}">
          <a href="javascript:" target="_blank" @click="closeTalion">
              <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
        </router-link>

          <a href="https://www.tmall.com/" target="_blank">
            <strong style="color: rgb(66, 189, 86);">天猫</strong>
            <span>shut up</span>
          </a>
        </div>
      </li>
    </ul>
    <sub-nav mold="navBottom"></sub-nav>
  </div>
</template>

<script>
import SubNav from '../components/SubNav'

export default {
  name: 'talion-view',
  components: { SubNav },
  data () {
    return {
      queryStr: ''
    }
  },
  methods: {
    closeTalion: function () {
      this.$emit('closeTalion')
    },
    /**
     * Going to search view
     * params: q
     */
    goSearch: function () {
      this.$emit('closeTalion')
      this.$router.push({
        name: 'SearchView',
        params: {
          q: this.queryStr
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.talion-view {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 41.2rem;
  background-color: #fff;
  z-index: 999;
}

.close-talion {
  color: #337ab7;
  font-size: 1.6rem;
}

.search {
  flex: 1;
  width: 100%;
  padding-left: 1rem;
}

input[type="search"] {
  box-sizing: border-box;
  border: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrtam9nblxqewm2bn/N+vntvZ2afuro+sVZoB0+9xv9qd3f3w+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1ehyw1gbopnm2sw0/9xekamqiocu0xhqaxct9kdbhtceaeqlhregakfq0x6jfz6sgovj5k2izrawbzczqdh/7wdypxwifv+91u8wchmbksystvotchvt7nrw4eiegnnclkgkquqgpzihwfqty0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==)
    no-repeat 50% #f3f3f3;
  background-size: 1.73rem;
  border-radius: 0.3rem;
  width: 100%;
  height: 3.2rem;
  font-size: 1.4rem;
}

input[type="search"]:focus {
  background: #f3f3f3;
}

ul {
  display: flex;
  justify-content: space-around;
  padding-top: 2.5rem;

  li {
    width: 33.33%;
  }

  div {
    position: relative;
    float: left;
    left: 50%;
    top: 0;
  }

  a {
    position: relative;
    left: -50%;
    top: 0;
    display: block;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  strong {
    display: block;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  span {
    display: block;
    color: #999;
    height: 1.7rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
}
</style>
