<template>
  <div id="app">
    <div class="main-wrap">
      <div class="blur-bg" :style="{backgroundImage: 'url(' + bgimg + ')'}"></div>
      <div class="container">
        <v-nav></v-nav>
        <v-history></v-history>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Main from './components/Main'
import Nav from './components/Nav'
import History from './components/History'
const bgimg = require('../static/bg-img.png')

export default {
  name: 'App',
  components: {
    'v-main': Main,
    'v-nav': Nav,
    'v-history': History
  },
  data () {
    return {
      bgimg: bgimg,
      showHistoryMap: false
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
.container {
  width: 1000px;
  min-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;
}
.main-wrap {
  position: relative;
  min-height: 100%;
}
.blur-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.full-map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
}
.swiper01-wrap,
.history-wrap {
  width: 1920px;
  position: relative;
  overflow: scroll !important;
}
.history-img {
  width: 1920px;
}
.close-btn-wrap {
  position: fixed;
  top: 10px;
  right: 40px;
  cursor: pointer;
  z-index: 99;
}
.icon-close:hover,
.icon-download:hover {
  color: #000;
}
.icon-close {
  font-size: 25px;
  color: #666;
}
.swiper01-wrap:hover .com-arrow-wrap {
  visibility: visible;
}
.com-arrow-wrap {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1100;
  color: #666;
  cursor: pointer;
  visibility: hidden;
}
.com-arrow-wrap:hover {
  color: #000;
}
.icon-arrow {
  font-size: 20px;
}
.left-arrow-wrap {
  left: 10px;
}
.right-arrow-wrap {
  right: 10px;
}
.icon-right-arrow {
  display: block;
  transform: rotate(180deg);
}
.white-map {
  background: rgb(255, 255, 255, 0.9);
}
.download-btn {
  right: 80px;
}
.icon-download {
  font-size: 26px;
  color: #666;
}
.download-txt {
  position: fixed;
  color: #fff;
  background-color: #666;
  font-size: 12px;
  top: 12px;
  right: 120px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 1s;
  padding: 5px;
  border-radius: 4px;
}
.download-wrap:hover .download-txt {
  opacity: 1;
}
.com-icon {
  font-size: 30px;
}
.icon-txt {
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  line-height: 1.2;
}
</style>
