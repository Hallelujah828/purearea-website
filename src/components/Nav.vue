<template>
  <div class="nav-wrap">
    <router-link :to="{name: 'Main'}">
      <img :src="purelogo" class="nav-logo">
    </router-link>
    <ul class="nav-title">
      <a :href="item.url" :target="item.target" v-for="(item, index) in $t('navTitles')" v-bind:key="index" @click="titleOPtion(index)" class="flex-nav-txt">
        <li class="nav-title-item">
          {{item.title}}
        </li>
      </a>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{$t('links')}}
        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item>
            <a href="http://www.v-can.cn" target="_blank">
              {{$t('vCan')}}
            </a>
          </el-dropdown-item>

          <el-dropdown-item>
            <a href="http://reset.build" target="_blank">
              {{$t('reset')}}
            </a>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
      <li class="nav-title-item" @click="changeLocale">
        <span class="icon-wrap">
          <i class="iconfont com-icon" :class="$t('curIcon')"></i>
        </span>
      </li>
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
      purelogo: purelogo
    }
  },
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      LangStorage.setLang(this.$i18n.locale) // 用做切换和将用户习惯存储到本地浏览器
    },
    titleOPtion (index) {
      if (index === 0) {
        bus.$emit('showHistory', true)
      } else if (index === 1) {
        this.$router.push({
          name: 'Email'
        })
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
  margin: 0 15px;
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
.el-dropdown-link.el-dropdown-selfdefine {
  margin: 0 15px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
