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
  font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC',
    'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei',
    sans-serif;
}
#app {
  height: 100vh;
}
</style>
