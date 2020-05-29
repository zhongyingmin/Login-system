<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="title">机构登录</div>
      <div></div>
    </div>
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
            <router-link to="/" class="text-wrapper">密码登录</router-link>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <third-party />
  </div>
</template>

<script>
import ThirdParty from "@/components/ThirdParty";
export default {
  components: {
    ThirdParty
  },
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
  .header {
    padding:  20px;
    box-sizing: border-box;
    .title {
      text-align: right;
      color: #ffffff;
    }
  }
  .el-form {
    padding: 0 50px;
    box-sizing: border-box;
    .desc-wrapper {
      margin-top: 10px;
      .el-form-item__content {
        .el-checkbox {
          color: #666666;
          .el-checkbox__inner:hover {
            border-color: #e5b467;
          }
          .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #e5b467;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            color: #e5b467;
            background-color: #e5b467;
            border-color: #e5b467;
          }
          .yellow {
            color: #e5b467;
          }
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #666666;
          }
        }
        .text-wrapper {
          color: #999999;
          font-size: 14px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>