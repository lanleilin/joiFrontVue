<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/unicorn_logo.png" alt="下载Joi">
      <div class="info-content">
        <strong>Joi</strong>
        <!-- <div>EVERYTHING YOU WANT TO HEAR</div> -->
      </div>
    </div>
    <a href="#">EVERYTHING YOU WANT TO HEAR</a>
  </div>
</template>

<script>
  export default {
    name: 'download-app',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.download-app {
  padding: 0 0 2rem 0;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.5rem;
}

.info {
  margin: 0 auto 1.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1.4rem;
  display: inline-block;
  color: #111;
}

img {
  float: left;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
}

.info-content {
  overflow: hidden;
}

strong {
  font-size: 2.4rem;
  color: #337ab7;
  font-weight: bold;
  line-height: 2.8rem;
}

.download-app a:last-child {
  display: block;
  color: #ff8345;
  font-weight: normal;
  text-decoration: none;
}
</style>
