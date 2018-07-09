<template>
  <div class="container">
    <div class="nav-wrap">
      <img src="../../static/vcan-logo.png" class="nav-logo">
      <ul class="nav-title">
        <li class="nav-title-item" v-for="(item, index) in $t('navTitles')" v-bind:key="index">
          {{item}}
        </li>
        <li class="nav-title-item" @click="changeLocale">
          <span class="icon-wrap">
            <i class="iconfont com-icon" :class="$t('curIcon')"></i>
          </span>
        </li>
      </ul>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperSlides" v-bind:key="index">
        <img :src="item" class="swiper-img">
        <div class="title-wrap" v-show="index==0">
          <div class="pure-logo-wrap">
            <img src="../../static/pure-logo.png" class="pure-logo">
            <p class="pure-logo-txt" :class="$t('curLogoTxt')">{{$t('logoTxt')}}</p>
          </div>
          <div class="title-righr-wrap">
            <p class="title-sm-txt">{{$t('smTitle')}}</p>
            <h2 class="title-large-txt">{{$t('largeTitle')}}</h2>
            <button class="contact-us clear-btn">{{$t('contactBtn')}}</button>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <div class="catalogue-wrap vel-flex">
      <div v-for="(item, index) in $t('catalogue')" v-bind:key="index" class="catalogue-item vel-flex" @click="showFullMap(index)">
        <span class="icon-wrap">
          <i :class="item.icon" class="iconfont com-icon"></i>
        </span>
        <p class="icon-txt">{{item.title}}</p>
      </div>
    </div>
    <div class="copyright">
      <p>{{$t('copyright')}}</p>
    </div>
    <div class="full-map" v-show="mapShow">
      <swiper :options="swiper01Option" ref="mySwiper" class="swiper01-wrap">
        <swiper-slide v-for="(item, index) in $t('catalogue')" v-bind:key="index">
          <img :src="item.img" class="swiper-img">
          <span class="close-btn-wrap" @click="closeFullMap">
            <i class="iconfont icon-close"></i>
          </span>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div slot="button-prev" class="left-arrow-wrap">
          <i class="iconfont icon-arrow"></i>
        </div>
        <div slot="button-next" class="right-arrow-wrap">
          <i class="iconfont icon-arrow arrow-right"></i>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LangStorage from './../helpers/lang'

export default {
  name: 'Main',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      curLocale: '',
      swiperOption: {
        // 是一个组件自有属性，意味着你可以在第一时间获取到swiper对象
        notNextTick: true,
        speed: 2000,
        autoplay: true,
        loop: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      swiperSlides: ['../static/swiper00.jpg', '../static/swiper01.jpg', '../static/swiper02.jpg'],
      swiper01Option: {
        notNextTick: true,
        effect: 'fade',
        speed: 300,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      mapShow: false
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
  },
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      LangStorage.setLang(this.$i18n.locale) // 用做切换和将用户习惯存储到本地浏览器
    },
    closeFullMap () {
      this.mapShow = false
    },
    showFullMap (index) {
      console.log(index)
      this.mapShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
}
.swiper-img {
  width: 100%;
}
.nav-wrap {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
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
}
.contact-us:hover {
  background: #0066cc;
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
  padding-top: 20px;
  box-sizing: border-box;
}
.catalogue-item:hover .com-icon,
.catalogue-item:hover .icon-txt {
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
}
.copyright {
  width: 100%;
  background: #fff;
  font-size: 12px;
  text-align: center;
  padding-bottom: 30px;
}
.icon-en, .icon-zh{
  color: #fff;
  font-size: 18px;
}
.logo-en-txt{
  font-size: 13px;
}
.logo-zh-txt{
   font-size: 18px;
}
.full-map{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper01-wrap{
  width: 800px;
}
.close-btn-wrap{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.close-btn-wrap:hover .icon-close{
  color: #000;
}
.icon-close{
  font-size: 25px;
  color: #666;
}
.com-arrow-wrap{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left-arrow-wrap{
  left: 10px;
}
.right-arrow-wrap{
  right: 10px;
}
</style>
