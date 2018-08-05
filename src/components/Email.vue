<template>
  <div class="container">
    <div class="blue-bg">联系我们</div>
    <div class="main-form">
      <div class>请留下您的信息，我们会尽快与您取得联系：</div>
      <el-form ref="form" :model="form" label-width="80px">
        <div class="form-item-group">
          <div class="form-col-2">
            <div>基本信息</div>
            <div class="flex-form-item">
              <el-form-item label="姓名（必填）">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="邮箱（必填）">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
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
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Email',
  data () {
    return {
      form: {
        name: '',
        region: '',
        desc: ''
      }
    }
  },
  components: {
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
  background: #d3dce6;
}
</style>
