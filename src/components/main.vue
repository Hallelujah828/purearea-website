<template>
  <div class="container">
    <div class="nav-wrap">
      <img src="../../static/vcan-logo.png" class="nav-logo">
      <ul class="nav-title">
        <li class="nav-title-item">历史品牌及战略</li>
        <li class="nav-title-item">维迈集团</li>
        <li class="nav-title-item">Reset认证</li>
        <li class="nav-title-item">案例分析</li>
      </ul>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in swiperSlides" v-bind:key="index">
        <img :src="item" class="swiper-img">
        <div class="title-wrap" v-if="index==0">
          <div class="pure-logo-wrap">
            <img src="../../static/pure-logo.png" class="pure-logo">
            <p class="pure-logo-txt">空氣品質改良專家</p>
          </div>
          <div class="title-righr-wrap">
            <p class="title-sm-txt">室内空气治理</p>
            <h2 class="title-large-txt">综合解决方案</h2>
            <button class="contact-us clear-btn ">联系我们</button>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <div class="catalogue-wrap vel-flex">
      <div v-for="(item, index) in catalogue" v-bind:key="index" class="catalogue-item vel-flex">
        <span class="icon-wrap">
          <i :class="item.icon" class="iconfont com-icon"></i>
        </span>
        <p class="icon-txt">{{item.title}}</p>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2015 - 2018 by purearea.Ltd All rights reserved. 沪ICP备XXXXXX号&nbsp; 沪公网安备XXXXXXX号</p>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Main',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
      // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
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
      catalogue: [
        {
          icon: 'icon-purify',
          title: '整屋净化',
          img: '../../tatic/img-purify.jpg'
        },
        {
          icon: 'icon-purification03',
          title: '风管式净化器',
          img: '../../static/img-purification.jpg'
        },
        {
          icon: 'icon-filter',
          title: '过滤器',
          img: '../../static/img-filter.jpg'
        },
        {
          icon: 'icon-intelligent01',
          title: '智能化',
          img: '../../static/img-intelligent.jpg'
        },
        {
          icon: 'icon-electrostatic',
          title: '微静电净化器',
          img: '../../static/img-electrostatic.jpg'
        },
        {
          icon: 'icon-newfan',
          title: '节能新风机',
          img: '../../static/img-newfan.jpg'
        },
        {
          icon: 'icon-ch2o02',
          title: '甲醛净化',
          img: '../../static/img-ch2o.jpg'
        },
        {
          icon: 'icon-certification',
          title: 'Reset认证',
          img: '../../static/img-certification.jpg'
        }
      ]
    }
  },
  // 定义这个sweiper对象
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false)
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
.nav-title-item:hover {
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
  font-size: 18px;
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
}
.catalogue-item:hover .com-icon,
.catalogue-item:hover .icon-txt {
  color: #1896d6;
}
.catalogue-item:not(:last-child) {
  border-right: 2px dashed #ccc;
  box-sizing: border-box;
}
.com-icon {
  font-size: 30px;
}
.icon-txt {
  font-size: 12px;
  margin-top: 10px;
}
.copyright {
  width: 100%;
  background: #fff;
  font-size: 12px;
  text-align: center;
  padding-bottom: 30px;
}
</style>
