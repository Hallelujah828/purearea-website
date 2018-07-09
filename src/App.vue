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
</style>
