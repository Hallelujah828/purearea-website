<template>
  <div class="main-wrap">
    <div class="blur-bg" :style="{backgroundImage: 'url(' + bgimg + ')'}"></div>
    <div class="container">
      <div class="nav-wrap">
        <img :src="vcanlogo" class="nav-logo">
        <ul class="nav-title">
          <a :href="item.url" :target="item.target" v-for="(item, index) in $t('navTitles')" v-bind:key="index" @click="showHistory(index)" class="flex-nav-txt">
            <li class="nav-title-item">
              {{item.title}}
            </li>
          </a>
          <li class="nav-title-item" @click="changeLocale">
            <span class="icon-wrap">
              <i class="iconfont com-icon" :class="$t('curIcon')"></i>
            </span>
          </li>
        </ul>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
        <swiper-slide v-for="(item, index) in swiperSlides" v-bind:key="index" class="min-height-slide">
          <img :src="item" class="swiper-img">
          <div class="title-wrap" v-show="index==0">
            <div class="pure-logo-wrap">
              <img :src="purelogo" class="pure-logo">
              <p class="pure-logo-txt">空氣品質改良專家</p>
            </div>
            <div class="title-righr-wrap">
              <p class="title-sm-txt">{{$t('smTitle')}}</p>
              <h2 class="title-large-txt">{{$t('largeTitle')}}</h2>
              <a href="mailto:purearea@purearea.com.cn?cc=jun.xu@purearea.com.cn&cc=dawei.liu@purearea.com" class="contact-us">{{$t('contactBtn')}}</a>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <div class="catalogue-wrap vel-flex">
        <div v-for="(item, index) in $t('catalogue')" v-bind:key="index" class="catalogue-item vel-flex" :class="index == swiper01Index && mapShow || curInd == index ? 'active':''" @click="showFullMap(index)" @mouseenter="enter(index)" @mouseleave="leave">
          <span class="icon-wrap" v-if="index!==$t('catalogue').length-1">
            <i :class="item.icon" class="iconfont com-icon"></i>
          </span>
          <span class="icon-wrap" v-if="index==$t('catalogue').length-1">
            <img :src="resetImg" class="reset-logo">
          </span>
          <p class="icon-txt">{{item.title}}</p>
        </div>
      </div>
      <div class="copyright">
        <p>{{$t('copyright')}}</p>
      </div>
      <div class="full-map" v-show="mapShow">
        <swiper :options="swiper01Option" ref="mySwiper01" class="swiper01-wrap">
          <swiper-slide v-for="(item, index) in catalogueImgs" v-bind:key="index">
            <img :data-src="item" class="swiper-img swiper-lazy">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            <a href="http://7xrc2h.com1.z0.glb.clouddn.com/Purearea%20Brochure%20V1.2.pdf" download="Purearea" class="download-wrap">
              <span class="close-btn-wrap download-btn">
                <i class="iconfont icon-download"></i>
              </span>
              <span class="download-txt">查看更多</span>
            </a>
            <span class="close-btn-wrap" @click="closeFullMap">
              <i class="iconfont icon-close"></i>
            </span>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div slot="button-prev" class="com-arrow-wrap left-arrow-wrap">
            <i class="iconfont icon-arrow"></i>
          </div>
          <div slot="button-next" class="com-arrow-wrap right-arrow-wrap">
            <i class="iconfont icon-arrow icon-right-arrow"></i>
          </div>
        </swiper>
      </div>
      <div class="full-map white-map" v-show="loadingShow">
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="full-map" v-show="showHistoryMap">
        <div class="history-wrap">
          <img :src="history" class="history-img">
          <a href="http://7xrc2h.com1.z0.glb.clouddn.com/Purearea%20Brochure%20V1.2.pdf" download="Purearea" class="download-wrap">
            <span class="close-btn-wrap download-btn">
              <i class="iconfont icon-download"></i>
            </span>
            <span class="download-txt">查看更多</span>
          </a>
          <span class="close-btn-wrap" @click="closeHistory">
            <i class="iconfont icon-close"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LangStorage from './../helpers/lang'
const swiper0 = require('../../static/swiper00.jpeg')
const swiper01 = require('../../static/swiper01.jpg')
const swiper02 = require('../../static/swiper02.jpg')
const history = require('../../static/swiper03.jpg')
const pop0 = require('../../static/img-purify.jpg')
const pop01 = require('../../static/img-purification.jpg')
const pop02 = require('../../static/img-filter.jpg')
const pop03 = require('../../static/img-intelligent.jpg')
const pop04 = require('../../static/img-electrostatic.jpg')
const pop05 = require('../../static/img-newfan.jpg')
const pop06 = require('../../static/img-ch2o.jpg')
const pop07 = require('../../static/img-certification.jpg')
const purelogo = require('../../static/pure-logo.png')
const vcanlogo = require('../../static/vcan-logo.png')
const resetblack = require('../../static/reset-black.png')
const resetblue = require('../../static/reset-blue.png')
const bgimg = require('../../static/bg-img.png')

export default {
  name: 'Main',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    const self = this
    return {
      showTip: false,
      showHistoryMap: false,
      history: history,
      curInd: -1,
      bgimg: bgimg,
      curLocale: '',
      resetImg: resetblack,
      resetblue: resetblue,
      resetblack: resetblack,
      purelogo: purelogo,
      vcanlogo: vcanlogo,
      swiper01Index: -1,
      swiperOption: {
        // 是一个组件自有属性，意味着你可以在第一时间获取到swiper对象
        notNextTick: true,
        speed: 3500,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        preloadImages: true,
        updateOnImagesReady: true,
        on: {
          init: function () {
            self.loadingShow = true
            this.autoplay.stop()
          },
          imagesReady: function () {
            self.loadingShow = false
            this.autoplay.start()
          }
        }
      },
      swiperSlides: [swiper0, swiper01, swiper02],
      swiper01Option: {
        notNextTick: true,
        effect: 'fade',
        speed: 300,
        autoplay: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.right-arrow-wrap',
          prevEl: '.left-arrow-wrap'
        },
        lazy: {
          loadPrevNext: true
        },
        on: {
          transitionEnd: function () {
            self.swiper01Index = this.activeIndex
          }
        }
      },
      mapShow: false,
      loadingShow: false
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    swiper01 () {
      return this.$refs.mySwiper01.swiper
    },
    catalogueImgs () {
      return [pop05, pop01, pop02, pop03, pop04, pop06, pop0, pop07]
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
    this.swiper01.slideTo(0, 0, false)
  },
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      LangStorage.setLang(this.$i18n.locale) // 用做切换和将用户习惯存储到本地浏览器
    },
    closeFullMap () {
      this.mapShow = false
      this.swiper01Index = -1
      this.swiper.autoplay.start()
      this.resetImg = this.resetblack
    },
    showFullMap (index) {
      this.mapShow = true
      this.swiper.autoplay.stop()
      this.swiper01.slideTo(index, 0, false)
      if (index === 7) {
        this.resetImg = this.resetblue
      }
    },
    closeHistory () {
      this.showHistoryMap = false
    },
    enter (index) {
      this.curInd = index
      if (index === 7) {
        this.resetImg = this.resetblue
      }
    },
    leave () {
      this.curInd = -1
      this.resetImg = this.resetblack
    },
    showHistory (index) {
      if (index === 0) {
        this.showHistoryMap = true
      }
    },
    enterDownLoad () {
      this.showTip = true
    },
    leaveDownLoad () {
      this.showTip = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
@media screen and (min-width: 1100px) {
  .container {
    width: 1000px;
  }
}
@media screen and (min-width: 1366px) {
  .container {
    width: 1008px;
  }
}
@media screen and (min-width: 1440px) {
  .container {
    width: 1008px;
  }
}
@media screen and (min-width: 1680px) {
  .container {
    width: 1008px;
  }
}
@media screen and (min-width: 1920px) {
  .container {
    width: 1100px;
  }
}
.container {
  min-width: 1000px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  background: #fff;
}
.swiper-wrap {
  background-color: #ccc;
}
.min-height-slide {
  position: relative;
  min-height: 694px;
}
.swiper-wrap:hover .swiper-button-white {
  visibility: visible;
}
.swiper-button-white {
  visibility: hidden;
}
.swiper-img {
  width: 100%;
  min-width: 700px;
  min-height: 484px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  display: block;
}
.nav-wrap {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
}
.nav-logo {
  width: 100px;
}
.nav-title {
  display: flex;
}
.nav-title-item {
  margin-left: 30px;
  color: #fff;
  cursor: pointer;
}
.nav-title-item:hover,
.nav-title-item:hover .iconfont {
  color: #a42d58;
}
.swiper-slide {
  position: relative;
}
.title-wrap {
  position: absolute;
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.6);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.pure-logo-wrap {
  width: 200px;
}
.pure-logo-wrap,
.title-righr-wrap {
  height: 140px;
}
.title-righr-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
}
.pure-logo-txt {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
}
pure-logo-txt::after {
  display: inline-block;
  content: '';
  overflow: hidden;
  width: 100%;
  height: 0;
}
.pure-logo {
  width: 100%;
}
.title-sm-txt {
  font-size: 22px;
}
.title-large-txt {
  font-size: 48px;
}
.contact-us {
  width: 150px;
  padding: 5px 0;
  background: #1896d6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
.contact-us:hover {
  background: rgba(24, 150, 214, 0.8);
}
.catalogue-wrap {
  width: 100%;
  height: 150px;
  background: #fff;
}
.catalogue-item {
  width: 100px;
  height: 100px;
  flex-direction: column;
  cursor: pointer;
  justify-content: flex-start;
  padding: 20px 5px 0 5px;
  box-sizing: border-box;
}

/* .catalogue-item:hover .com-icon,
.catalogue-item:hover .icon-txt, */
.catalogue-item.active {
  color: #1896d6;
}
.catalogue-item:not(:last-child) {
  border-right: 2px dashed #ccc;
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
.copyright {
  width: 100%;
  background: #fff;
  font-size: 12px;
  text-align: center;
  padding-bottom: 30px;
}
.icon-en,
.icon-zh {
  color: #fff;
  font-size: 18px;
}
.logo-en-txt {
  font-size: 13px;
}
.logo-zh-txt {
  font-size: 18px;
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
  justify-content: center;
  align-items: center;
}
.swiper01-wrap,
.history-wrap {
  width: 65%;
  min-width: 800px;
  position: relative;
}
.history-img {
  width: 100%;
}
.close-btn-wrap {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
  position: absolute;
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
.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
.reset-logo {
  height: 30px;
  display: block;
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
.download-btn {
  right: 50px;
}
.icon-download {
  font-size: 26px;
  color: #666;
}
.download-txt {
  position: absolute;
  color: #000;
  font-size: 12px;
  top: 0;
  right: 90px;
  height: 45px;
  line-height: 45px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 1s;
}
.download-wrap:hover .download-txt {
  opacity: 1;
}
.flex-nav-txt {
  display: flex;
  align-items: center;
}
</style>
