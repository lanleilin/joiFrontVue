<template>
  <div>
      <h1>test</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "music-view",
//   components: { SubNav, List, InfiniteLoading, Loading },
  data() {
    return {
      // list:[]
    };
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    // ...mapState({
    //   events: state => state.activities.events
    // })
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
// .sub-nav {
//   margin: 0 1.8rem;
//   padding-top: 0.2rem;
// }
</style>
