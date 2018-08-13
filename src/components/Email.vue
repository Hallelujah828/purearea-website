<template>
  <div class="container">
    <div class="blue-bg">
      <router-link :to="{name: 'Main'}">
        <i class="iconfont icon-back"></i>
      </router-link>
      {{$t('contactBtn')}}
    </div>
    <div class="main-form">
      <div class>{{$t('contactInfo')}}</div>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <div class="form-item-title">{{$t('basicInfo')}}</div>
        <div class="form-item-group">
          <div class="form-col-6">
            <div class="flex-form-item">
              <el-form-item :label="$t('requiredName')" prop="name" class="form-com-width">
                <el-input v-model="ruleForm.name" clearable></el-input>
              </el-form-item>
              <el-form-item :label="$t('requiredEmail')" prop="email" class="input-width-425">
                <el-input v-model="ruleForm.email" clearable></el-input>
              </el-form-item>
            </div>
            <div class="flex-form-item">
              <el-form-item :label="$t('requiredPhone')" prop="telphone" class="form-com-width">
                <el-input v-model="ruleForm.telphone" clearable></el-input>
              </el-form-item>
              <el-form-item :label="$t('infoJob')" class="form-com-width" prop="job">
                <el-input v-model="ruleForm.job" clearable></el-input>
              </el-form-item>
              <el-form-item :label="$t('infoCompany')" class="form-com-width" prop="company">
                <el-input v-model="ruleForm.company" clearable></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="info-wrap bg-purple">
            <div class="info-content">
              <div>{{$t('contactWay')}}</div>
              <div class="info-item">
                <span class="icon-wrap">
                  <i class="iconfont icon-email icon-blue"></i>
                </span>
                <div class="info-spans info-col">
                  <span>purearea@purearea.com.cn</span>
                </div>
              </div>
              <div class="info-item">
                <span class="icon-wrap">
                  <i class="iconfont icon-phone icon-blue"></i>
                </span>
                <div class="info-spans info-col">
                  <span>+86 13641940979 {{$t('MrLiu')}}</span>
                  <span>+86 13918869505 {{$t('MrXu')}}</span>
                </div>
              </div>
              <div class="info-item">
                <span class="icon-wrap">
                  <i class="iconfont icon-address icon-blue"></i>
                </span>
                <div class="info-spans">
                  <span>{{$t('location')}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-item-title">{{$t('projectInfo')}}</div>
        <div class="form-item-group">
          <div class="flex-form-item form-col-10">
            <el-form-item :label="$t('requiredCity')" prop="city" class="form-com-width">
              <el-input v-model="ruleForm.city" clearable></el-input>
            </el-form-item>
            <el-form-item :label="$t('address')" prop="address" class="input-width-425 input-margin-5">
              <el-input v-model="ruleForm.address" clearable></el-input>
            </el-form-item>
            <el-form-item :label="$t('type')" prop="type" class="info-wrap">
              <el-select v-model="ruleForm.type" :placeholder="$t('typeSelect')">
                <el-option :label="item" :value="index" v-for="(item, index) in $t('projectTypes')" :key="index"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="form-item-group">
          <div class="flex-form-item form-col-10">
            <div class="form-item-column">
              <el-form-item :label="$t('area')" prop="area" class="form-com-width">
                <el-input v-model.number="ruleForm.area" clearable></el-input>
              </el-form-item>
              <el-button type="primary" @click="onSubmit('ruleForm')" class="form-com-width margin-form-btm">{{$t('contactBtn')}}</el-button>
              <router-link :to="{name: 'Main'}" class="block-link">
                <el-button class="form-com-width">{{$t('back')}}</el-button>
              </router-link>
            </div>
            <el-form-item :label="$t('message')" class="form-textarea" prop="message">
              <el-input type="textarea" :rows="7" v-model="ruleForm.message"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <el-dialog :title="$t('prompt')" :visible.sync="centerDialogVisible" width="30%" center>
      <span>{{dialogMessage}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">{{$t('confirm')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Email",
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      if (!value) {
        return callback(new Error(this.$t('errEmptyPhone')))
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
        // 所以我就在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error(this.$t('numMessage')))
        } else {
          if (phoneReg.test(value)) {
            callback()
          } else {
            callback(new Error(this.$t('errPhoneReg')))
          }
        }
      }, 100)
    }
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error(this.$t('errEmptyEmail')))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error(this.$t('emailMessage')))
        }
      }, 100)
    }
    return {
      centerDialogVisible: false,
      dialogMessage: '',
      ruleForm: {
        name: '',
        email: '',
        telphone: '',
        job: '',
        company: '',
        city: '',
        address: '',
        type: '',
        area: '',
        message: ''
      },
      rules: {
        name: {required: true, message: this.$t('nameMessage'), trigger: 'blur'},
        email: {validator: checkEmail, required: true, trigger: 'blur'},
        telphone: {validator: checkPhone, required: true, trigger: 'blur'},
        city: {required: true, message: this.$t('cityMessage'), trigger: 'blur'},
        type: {required: true, message: this.$t('typeMessage'), trigger: 'change'},
        area: {
          validator: (rule, value, callback) => {
            if (value !== '') {
              if ((/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value) === false) {
                callback(new Error(this.$t('numMessage')))
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
          trigger: 'change'
        }
      }
    }
  },
  components: {},
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('https://purearea.com.cn/api', this.ruleForm)
            .then((response) => {
              if (response.status === 200) {
                this.centerDialogVisible = true
                this.dialogMessage = this.$t('successMessage')
                setTimeout(() => {
                  this.$router.push({ name: 'Main' })
                  this.centerDialogVisible = false
                }, 3000)
              }
            })
        }
      });
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
  margin-top: 15px;
  line-height: 1.3;
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
.form-item-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.form-item-title {
  margin-top: 20px;
}
.form-col-10 {
  width: 100%;
}
.form-col-6 {
  width: 650px;
}
.flex-form-item {
  display: flex;
  justify-content: space-between;
}
.form-item-column {
  flex-direction: column;
}
.form-com-width {
  width: 200px;
}
.input-width-425 {
  width: 425px;
}
.info-wrap {
  width: 260px;
}
.el-select {
  width: 100%;
}
.block-link {
  display: block;
}
.input-margin-5 {
  margin-right: 5px;
}
.form-textarea {
  flex: 1;
  width: 100%;
  margin-left: 25px;
}
.margin-form-btm {
  margin-bottom: 20px;
}
.el-textarea__inner {
  height: 162px;
}
.icon-wrap {
  display: flex;
  align-items: center;
  align-self: flex-start;
}
</style>
