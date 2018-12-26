<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <!-- <h1 style="text-align:center" @click="onInfinite">homeview</h1> -->
    <list mold="thumbnail" :items="events"></list>
    <!-- <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: { SubNav, List, InfiniteLoading, Loading },
  data () {
    return {
      // list:[]
    }
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
    })
  },
  mounted () {
    this.loadMore(0)
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite ($state) {
      setTimeout(() => {
        this.loadMore(0)
        // $state.loaded();
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions(['loadMore'])
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
