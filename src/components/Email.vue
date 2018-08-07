<template>
  <div class="container">
    <div class="blue-bg">
      <router-link :to="{name: 'Main'}">
        <i class="iconfont icon-back"></i>
      </router-link>
      {{$t('contactBtn')}}
    </div>
    <div class="main-form">
      <div class="info-wrap bg-purple">
        <div class="info-content">
          <div>{{$t('contactWay')}}</div>
          <div class="info-item">
            <i class="iconfont icon-email icon-blue"></i>
            <div class="info-spans info-col">
              <span>purearea@purearea.com.cn</span>
            </div>
          </div>
          <div class="info-item">
            <i class="iconfont icon-phone icon-blue"></i>
            <div class="info-spans info-col">
              <span>+86 136 4194 0979 {{$t('MrLiu')}}</span>
              <span>+86 139 1886 9505 {{$t('MrXu')}}</span>
            </div>
          </div>
          <div class="info-item">
            <i class="iconfont icon-address icon-blue"></i>
            <div class="info-spans">
              <span>{{$t('location')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-btn">
        <router-link :to="{name: 'Main'}" class="contact-us gray-btn block-btn">
          {{$t('back')}}
        </router-link>
        <a href="mailto:purearea@purearea.com.cn?cc=jun.xu@purearea.com.cn&cc=dawei.liu@purearea.com" class="contact-us block-btn">{{$t('contactBtn')}}</a>
      </div>
      <!-- <div class>请留下您的信息，我们会尽快与您取得联系：</div> -->
      <!-- <el-form ref="form" :model="form">
        <div class="form-item-group">
          <div>基本信息</div>
          <div>
            <div class="flex-form-item form-col-2">
              <el-form-item label="姓名（必填）">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱（必填）">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </div>
          </div>
          <div>项目信息</div>
          <div class="flex-form-item">
            <el-form-item label="联系电话（必填）">
              <el-input v-model="form.telphone"></el-input>
            </el-form-item>
            <el-form-item label="职位">
              <el-input v-model="form.job"></el-input>
            </el-form-item>
            <el-form-item label="公司/单位">
              <el-input v-model="form.company"></el-input>
            </el-form-item>
          </div>
          <div class="form-col-1 bg-purple"></div>
        </div>
        <div class="form-item-group">
          <div class="flex-form-item">
            <el-form-item label="城市（必填）">
              <el-input v-model="form.telphone"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="form.job"></el-input>
            </el-form-item>
            <el-form-item label="类型（必选）">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="flex-form-item">
            <div class="form-col-1">
              <el-form-item label="项目面积（m2）">
                <el-input v-model="form.job"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </div>
            <div class="form-col-2">
              <el-form-item label="请留言">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </div>
          </div>
        </div>
      </el-form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {
      form: {
        name: "",
        region: "",
        desc: ""
      }
    }
  },
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!")
    }
  }
}
</script>

<style scoped>
.blue-bg {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #1896d6;
  color: #fff;
  font-size: 20px;
  padding-left: 30px;
  box-sizing: border-box;
}
.main-form {
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
  font-size: 16px;
}
.bg-purple {
  background: #f6f7f8;
  border-radius: 6px;
  padding: 20px;
  box-sizing: border-box;
}
.el-form-item__label {
  float: none;
}
.info-item {
  display: flex;
  margin-top: 20px;
}
.info-spans {
  padding-left: 15px;
}
.info-col {
  display: flex;
  flex-direction: column;
}
.icon-blue {
  color: #1896d6;
}
.info-spans span:not(:first-child) {
  margin-top: 10px;
}
.block-btn {
  display: block;
  margin-top: 15px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
}
.icon-back {
  font-size: 20px;
  padding-right: 10px;
  color: #fff;
  cursor: pointer;
}
.flex-btn{
  display: flex;
}
.gray-btn{
  background: #f6f7f8;;
  margin-right: 20px;
  color: #000;
}
</style>
