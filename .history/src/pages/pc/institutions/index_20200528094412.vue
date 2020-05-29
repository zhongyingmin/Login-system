<template>
  <div class="institutions-wrapper">
    <div class="main-wrapper">
      <div class="title">组织用户登录</div>
      <div class="content">
        <el-form ref="form" :model="loginForm" class="form-wrapper">
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" placeholder="请输入用户名/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :type="pwdType"
              autocomplete="on"
              placeholder="请输入密码"
            ></el-input>
            <span class="show-pwd" @click="showPwd">
              <svg-icon icon-class="eye" />
            </span>
          </el-form-item>
          <el-form-item class="slider-wrapper">
            <div class="slider"></div>
          </el-form-item>
          <el-form-item class="submit-wrapper">
            <el-button class="submit" type="primary">登录</el-button>
          </el-form-item>
          <el-form-item class="other-wrapper">
            <div class="left-wrapper">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <div class="right-wrapper"></div>
          </el-form-item>
        </el-form>
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
      pwdType: "",
      loginForm: {
        userName: "",
        password: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.institutions-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/pc/bg.png") no-repeat;
  background-size: auto;
  display: flex;
  .main-wrapper {
    margin: 0 auto;
    width: 440px;
    height: 540px;
    background-color: #ffffff;
    box-shadow: 0px 0px 21px 0px rgba(13, 13, 13, 0.14);
    border-radius: 4px;
    padding: 0 25px;
    box-sizing: border-box;
    align-self: center;
    .title {
      line-height: 80px;
      font-size: 18px;
      letter-spacing: 2px;
      color: #333333;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #eeeeee;
        border-radius: 1px;
      }
    }
  }
  .content {
    padding: 30px 0;
    .form-wrapper {
      .show-pwd {
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 16px;
        color: rgba(51, 51, 51, 0.5);
        cursor: pointer;
        user-select: none;
      }
      .slider-wrapper {
        margin-bottom: 30px;
        .slider {
          width: 100%;
          height: 40px;
          background-color: #eeeeee;
          border-radius: 4px;
        }
      }
      .submit-wrapper {
        width: 100%;
        height: 45px;
        margin-bottom: 5px;
        .el-button {
          width: 100%;
          height: 45px;
          font-size: 18px;
          text-indent: 4px;
          letter-spacing: 4px;
        }
      }
      .other-wrapper{
          display: flex;
          justify-content: space-between;
      }
    }
  }
}
</style>