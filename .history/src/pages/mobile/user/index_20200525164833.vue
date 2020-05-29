<template>
  <div class="user-wrapper">
    <el-form ref="form" :model="loginForm">
      <el-form-item prop="phone">
        <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="sidentify" class="sidentify-wrapper">
        <el-row :span="24" :gutter="15">
          <el-col :span="14">
            <el-input placeholder="请输入验证码" v-model="loginForm.sidentify"></el-input>
          </el-col>
          <el-col :span="8" :offset="2">
            <div class="login-code" @click="refreshCode">
              <sidentify
                @click="refreshCode"
                :identifyCode="identifyCode"
                style="width:120px;border-radius: 4px;overflow: hidden;"
              />
            </div>
          </el-col>
        </el-row>
      </el-form-item>
      <div class="item-text">未注册的手机号验证后自动创建账户</div>
      <el-form-item prop="smsCode" class="smsCode-wrapper">
        <el-row :span="24" :gutter="15">
          <el-col :span="14">
            <el-input
              placeholder="请输入短信验证码"
              v-model="loginForm.smsCode"
              @keyup.enter.native="submitForm('loginForm')"
            ></el-input>
          </el-col>
          <el-col :span="8" :offset="2">
            <button type="button" class="send-button">发送验证码</button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item class="submit-wrapper">
        <el-button class="submit" type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
      <el-form-item class="desc-wrapper">
        <el-row :span="24" :gutter="17">
          <el-col :span="14">
            <el-checkbox v-model="loginForm.key">
              我已阅读并接受
              <span class="yellow">用户协议</span>和
              <span class="yellow">隐私政策</span>
            </el-checkbox>
          </el-col>
          <el-col :span="8" :style="{textAlign:'right'}" :offset="2">
            <router-link to="/" class="text-wrapper">组织用户登录</router-link>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div class="third-party">
      <div class="title-wrapper">第三方账号登录</div>
      <div class="icon-wrapper">
        <div class="icon left">
          <i class="icon-48-38-60-47 iconfont"></i>
        </div>
        <div class="icon right">
          <i class="icon-48-38 iconfont"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      loginForm: {
        phone: "",
        sidentify: "",
        smsCode: "",
        key: false
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("授权成功");
        } else {
          return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.user-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/mobile/app_bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>