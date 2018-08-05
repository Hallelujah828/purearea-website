// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueI18n from 'vue-i18n'
import LangStorage from './helpers/lang'
import router from './router'
import {
  Input,
  Select,
  Option,
  OptionGroup,
  Form,
  FormItem,
  Dialog,
  Button
} from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Button)

// 使用多文件管理不同的语言
const i18n = new VueI18n({
  locale: LangStorage.getLang('zh'), // 语言标识，用做切换和将用户习惯存储到本地浏览器
  messages: {
    zh: require('./common/lang/zh'),
    en: require('./common/lang/en')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
