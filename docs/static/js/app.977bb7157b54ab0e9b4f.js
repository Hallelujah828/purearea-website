webpackJsonp([0],{"/H+n":function(t,i){},"/dHy":function(t,i,s){t.exports=s.p+"static/img/swiper02.ba8d9cf.jpg"},"/uab":function(t,i){t.exports={navTitles:["Historical brand and strategy","V·CAN group","Reset certification","Case analysis"],curIcon:"icon-zh",curLogoTxt:"logo-en-txt",logoTxt:"Air Quality Improvement Expert",smTitle:"Indoor Air Treatment",largeTitle:"Integrated Solution",contactBtn:"Contact us",catalogue:[{icon:"icon-purify",title:"Whole house purification",img:"/static/img-purify.jpg"},{icon:"icon-purification03",title:"Duct type purifier",img:"/static/img-purification.jpg"},{icon:"icon-filter",title:"Filter",img:"/static/img-filter.jpg"},{icon:"icon-intelligent01",title:"Intelligent",img:"/static/img-intelligent.jpg"},{icon:"icon-electrostatic",title:"Micro electrostatic purifier",img:"/static/img-electrostatic.jpg"},{icon:"icon-newfan",title:"Energy saving new fan",img:"/static/img-newfan.jpg"},{icon:"icon-ch2o02",title:"Formaldehyde purification",img:"/static/img-ch2o.jpg"},{icon:"icon-certification",title:"Reset certification",img:"/static/img-certification.jpg"}],copyright:"Copyright © 2015 - 2018 by purearea.Ltd. All rights reserved.Shanghai ICP No.xxx. Shanghai Public Network Security No.xxx."}},"1Z1U":function(t,i,s){t.exports=s.p+"static/img/img-ch2o.e55325a.jpg"},BM2J:function(t,i){},ItEs:function(t,i,s){t.exports=s.p+"static/img/img-purify.45cdcd3.jpg"},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a=(s("v2ns"),s("7QTg")),n=s.n(a),o=function(t){window.localStorage.setItem("user_lang",t)},c=function(t){var i=window.localStorage.getItem("user_lang");return null===i?t:i},r=s("el91"),l=s("TM+v"),p=s("/dHy"),g=s("ItEs"),u=s("RUSY"),m=s("Unyd"),w=s("uhvz"),v=s("TOZ9"),d=s("P5RE"),f=s("1Z1U"),h=s("ItEs"),x=s("XXZA"),_=s("uVBa"),C={name:"Main",components:{swiper:a.swiper,swiperSlide:a.swiperSlide},data:function(){var t=this;return{curLocale:"",purelogo:x,vcanlogo:_,swiper01Index:"-1",swiperOption:{notNextTick:!0,speed:3500,autoplay:{delay:5e3},slidesPerView:"auto",centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},preloadImages:!0,updateOnImagesReady:!0,on:{init:function(){this.autoplay.stop(),t.loadingShow=!0},imagesReady:function(){t.loadingShow=!1,this.autoplay.start()}}},swiperSlides:[r,l,p],swiper01Option:{notNextTick:!0,effect:"fade",speed:300,autoplay:!1,slidesPerView:"auto",centeredSlides:!0,navigation:{nextEl:".right-arrow-wrap",prevEl:".left-arrow-wrap"},lazy:{loadPrevNext:!0},on:{transitionEnd:function(){t.swiper01Index=this.activeIndex}}},mapShow:!1,loadingShow:!1}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiper01:function(){return this.$refs.mySwiper01.swiper},catalogueImgs:function(){return[g,u,m,w,v,d,f,h]}},mounted:function(){this.swiper.slideTo(0,0,!1),this.swiper01.slideTo(0,0,!1)},methods:{changeLocale:function(){var t=this.$i18n.locale;this.$i18n.locale="zh"===t?"en":"zh",o(this.$i18n.locale)},closeFullMap:function(){this.mapShow=!1,this.swiper01Index="-1",this.swiper.autoplay.start()},showFullMap:function(t){this.mapShow=!0,this.swiper.autoplay.stop(),this.swiper01.slideTo(t,0,!1)}}},y={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"nav-wrap"},[s("img",{staticClass:"nav-logo",attrs:{src:t.vcanlogo}}),t._v(" "),s("ul",{staticClass:"nav-title"},[t._l(t.$t("navTitles"),function(i,e){return s("li",{key:e,staticClass:"nav-title-item"},[t._v("\n        "+t._s(i)+"\n      ")])}),t._v(" "),s("li",{staticClass:"nav-title-item",on:{click:t.changeLocale}},[s("span",{staticClass:"icon-wrap"},[s("i",{staticClass:"iconfont com-icon",class:t.$t("curIcon")})])])],2)]),t._v(" "),s("swiper",{ref:"mySwiper",staticClass:"swiper-wrap",attrs:{options:t.swiperOption}},[t._l(t.swiperSlides,function(i,e){return s("swiper-slide",{key:e,staticClass:"min-height-slide"},[s("img",{staticClass:"swiper-img",attrs:{src:i}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e,expression:"index==0"}],staticClass:"title-wrap"},[s("div",{staticClass:"pure-logo-wrap"},[s("img",{staticClass:"pure-logo",attrs:{src:t.purelogo}}),t._v(" "),s("p",{staticClass:"pure-logo-txt",class:t.$t("curLogoTxt")},[t._v(t._s(t.$t("logoTxt")))])]),t._v(" "),s("div",{staticClass:"title-righr-wrap"},[s("p",{staticClass:"title-sm-txt"},[t._v(t._s(t.$t("smTitle")))]),t._v(" "),s("h2",{staticClass:"title-large-txt"},[t._v(t._s(t.$t("largeTitle")))]),t._v(" "),s("a",{staticClass:"contact-us",attrs:{href:"mailto:purearea@126.com"}},[t._v(t._s(t.$t("contactBtn")))])])])])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),s("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),s("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2),t._v(" "),s("div",{staticClass:"catalogue-wrap vel-flex"},t._l(t.$t("catalogue"),function(i,e){return s("div",{key:e,staticClass:"catalogue-item vel-flex",class:e==t.swiper01Index&&t.mapShow?"active":"",on:{click:function(i){t.showFullMap(e)}}},[s("span",{staticClass:"icon-wrap"},[s("i",{staticClass:"iconfont com-icon",class:i.icon})]),t._v(" "),s("p",{staticClass:"icon-txt"},[t._v(t._s(i.title))])])})),t._v(" "),s("div",{staticClass:"copyright"},[s("p",[t._v(t._s(t.$t("copyright")))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.mapShow,expression:"mapShow"}],staticClass:"full-map"},[s("swiper",{ref:"mySwiper01",staticClass:"swiper01-wrap",attrs:{options:t.swiper01Option}},[t._l(t.catalogueImgs,function(i,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"swiper-img swiper-lazy",attrs:{"data-src":i}}),t._v(" "),s("div",{staticClass:"swiper-lazy-preloader swiper-lazy-preloader-white"}),t._v(" "),s("span",{staticClass:"close-btn-wrap",on:{click:t.closeFullMap}},[s("i",{staticClass:"iconfont icon-close"})])])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),s("div",{staticClass:"com-arrow-wrap left-arrow-wrap",attrs:{slot:"button-prev"},slot:"button-prev"},[s("i",{staticClass:"iconfont icon-arrow"})]),t._v(" "),s("div",{staticClass:"com-arrow-wrap right-arrow-wrap",attrs:{slot:"button-next"},slot:"button-next"},[s("i",{staticClass:"iconfont icon-arrow icon-right-arrow"})])],2)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingShow,expression:"loadingShow"}],staticClass:"full-map white-map"},[t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"loader"},[i("div",{staticClass:"dot"}),this._v(" "),i("div",{staticClass:"dot"}),this._v(" "),i("div",{staticClass:"dot"}),this._v(" "),i("div",{staticClass:"dot"}),this._v(" "),i("div",{staticClass:"dot"})])}]};var S={name:"App",components:{"v-main":s("VU/8")(C,y,!1,function(t){s("BM2J")},"data-v-307df9bb",null).exports},data:function(){return{}}},b={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-main")],1)},staticRenderFns:[]};var T=s("VU/8")(S,b,!1,function(t){s("/H+n")},null,null).exports,j=s("TXmL");e.a.config.productionTip=!1,e.a.use(n.a),e.a.use(j.a);var I=new j.a({locale:c("zh"),messages:{zh:s("xZXS"),en:s("/uab")}});new e.a({el:"#app",i18n:I,components:{App:T},template:"<App/>"})},P5RE:function(t,i,s){t.exports=s.p+"static/img/img-newfan.36d766b.jpg"},RUSY:function(t,i,s){t.exports=s.p+"static/img/img-purification.45f0ca5.jpg"},"TM+v":function(t,i,s){t.exports=s.p+"static/img/swiper01.64d09f1.jpg"},TOZ9:function(t,i,s){t.exports=s.p+"static/img/img-electrostatic.b4c5380.jpg"},Unyd:function(t,i,s){t.exports=s.p+"static/img/img-filter.9855233.jpg"},XXZA:function(t,i,s){t.exports=s.p+"static/img/pure-logo.08870b5.png"},el91:function(t,i,s){t.exports=s.p+"static/img/swiper00.ca42ffe.jpg"},uVBa:function(t,i,s){t.exports=s.p+"static/img/vcan-logo.351df9f.png"},uhvz:function(t,i,s){t.exports=s.p+"static/img/img-intelligent.9bf4d63.jpg"},v2ns:function(t,i){},xZXS:function(t,i){t.exports={navTitles:["历史品牌及战略","维迈集团","Reset认证","案例分析"],curIcon:"icon-en",curLogoTxt:"logo-zh-txt",logoTxt:"空氣品質改良專家",smTitle:"室内空气治理",largeTitle:"综合解决方案",contactBtn:"联系我们",catalogue:[{icon:"icon-purify",title:"整屋净化",img:"/static/img-purify.jpg"},{icon:"icon-purification03",title:"风管式净化器",img:"/static/img-purification.jpg"},{icon:"icon-filter",title:"过滤器",img:"/static/img-filter.jpg"},{icon:"icon-intelligent01",title:"智能化",img:"/static/img-intelligent.jpg"},{icon:"icon-electrostatic",title:"微静电净化器",img:"/static/img-electrostatic.jpg"},{icon:"icon-newfan",title:"节能新风机",img:"/static/img-newfan.jpg"},{icon:"icon-ch2o02",title:"甲醛净化",img:"/static/img-ch2o.jpg"},{icon:"icon-certification",title:"Reset认证",img:"/static/img-certification.jpg"}],copyright:"版权所有©2015 - 2018 维迈集团保留所有权利。沪ICP备XXXXXX号 沪公网安备XXXXXXX号。"}}},["NHnr"]);
//# sourceMappingURL=app.977bb7157b54ab0e9b4f.js.map