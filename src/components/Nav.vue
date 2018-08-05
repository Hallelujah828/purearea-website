<template>
  <div class="nav-wrap">
    <router-link :to="{name: 'Main'}">
      <img :src="purelogo" class="nav-logo">
    </router-link>
    <ul class="nav-title">
      <a :href="item.url" :target="item.target" v-for="(item, index) in $t('navTitles')" v-bind:key="index" @click="titleOPtion(index)" @mouseenter="enterOption(index)" class="flex-nav-txt">
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
    <ul class="nav-title select-group" :class="[showSelect?'select-group-show':'',$t('curRight')]" @mouseleave="leaveOption">
      <a href="http://www.v-can.cn" target="_blank">
        <li class="nav-title-item">{{$t('vCan')}}</li>
      </a>
      <a href="http://reset.build" target="_blank">
        <li class="nav-title-item">{{$t('reset')}}</li>
      </a>
    </ul>
  </div>
</template>

<script>
import bus from '../common/bus'
import LangStorage from './../helpers/lang'
const purelogo = require('../../static/pure-logo.png')

export default {
  name: 'Nav',
  data () {
    return {
      purelogo: purelogo,
      showSelect: false
    }
  },
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      LangStorage.setLang(this.$i18n.locale) // 用做切换和将用户习惯存储到本地浏览器
    },
    enterOption (index) {
      if (index === 2) {
        this.showSelect = true
      }
    },
    leaveOption () {
      this.showSelect = false
    },
    titleOPtion (index) {
      if (index === 0) {
        bus.$emit('showHistory', true)
      } else if (index === 1) {
        this.$router.push({
          name: 'Email'
        })
      } else if (index === 2) {
        this.showSelect = !this.showSelect
      }
    }
  },
  created () {
  }
}
</script>

<style scoped>
.nav-wrap {
  position: relative;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.nav-logo {
  height: 30px;
}
.nav-title {
  display: flex;
}
.nav-title-item {
  margin-left: 30px;
  color: #000;
  cursor: pointer;
}
.nav-title-item:hover,
.nav-title-item:hover .iconfont {
  color: #1896d6;
}
.flex-nav-txt {
  display: flex;
  align-items: center;
}
.select-group {
  position: absolute;
  top: 60px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.select-group-27 {
  right: 0;
}
.select-group-54 {
  right: 54px;
}
.select-group-show {
  opacity: 1;
}
.select-group .nav-title-item {
  margin: 0 20px;
  height: 40px;
  line-height: 40px;
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
.icon-en,
.icon-zh {
  color: #000;
  font-size: 18px;
}
.logo-en-txt {
  font-size: 13px;
}
.logo-zh-txt {
  font-size: 18px;
}
</style>
