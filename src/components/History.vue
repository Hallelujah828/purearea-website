<template>
  <div class="full-map" v-show="showHistory">
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
</template>

<script>
import bus from '../common/bus'
const history = require('../../static/swiper03.jpg')

export default {
  name: 'History',
  data () {
    return {
      history: history,
      showHistory: false
    }
  },
  components: {
  },
  methods: {
    closeHistory () {
      this.showHistory = false
    }
  },
  created () {
    bus.$on('showHistory', () => {
      this.showHistory = true
    })
  }
}
</script>

<style scoped>
</style>
