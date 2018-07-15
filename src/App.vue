<template>
  <div id="app">
    <v-main></v-main>
  </div>
</template>

<script>
import Main from './components/main'

export default {
  name: 'App',
  components: {
    'v-main': Main
  },
  data () {
    return {
    }
  }
}
</script>

<style>
@import '../src/styles/reset.css';
@import '../src/styles/common.css';
@import '../src/styles/icon.css';
body {
  min-width: 1000px;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, 'PingFang SC',
    'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei',
    sans-serif;
}
@media screen and (orientation: portrait) {
  .main-wrap {
    transform: rotate(90deg);
    transform-origin: 0% 0%;
    width: 100vh;
    height: 100vw;
    top: 0;
    left: 100vw;
    overflow: hidden;
  }
}
@media screen and (orientation: landscape) {
  .main-wrap {
    transform: rotate(0);
  }
}
</style>
