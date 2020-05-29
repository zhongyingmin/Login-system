<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="center-wrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="短信登录" name="sms">
            <el-form ref="form" :model="form">
              <el-form-item prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="sidentify" class="code-wrapper">
                <el-row :span="24" :gutter="17">
                  <el-col :span="14">
                    <el-input placeholder="请输入验证码" v-model="form.sidentify"></el-input>
                  </el-col>
                  <el-col :span="8" :offset="2">
                    <div class="login-code" @click="refreshCode">
                      <sidentify
                        @click="refreshCode"
                        :identifyCode="identifyCode"
                        style="width:112px;border-radius: 4px;overflow: hidden;"
                      />
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
              <div class="item-text">未注册的手机号验证后自动创建账户</div>
              <el-form-item prop="smsCode" class="smsCode-wrapper">
                <el-row :span="24" :gutter="17">
                  <el-col :span="14">
                    <el-input
                      placeholder="请输入短信验证码"
                      v-model="form.smsCode"
                      @keyup.enter.native="submitForm('loginForm')"
                    ></el-input>
                  </el-col>
                  <el-col :span="8" :offset="2">
                    <button type="button" class="send-button">发送短信</button>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item class="submit-wrapper">
                <el-button class="submit" type="primary" @click="submitForm('loginForm')">登录</el-button>
              </el-form-item>
              <el-form-item class="desc-wrapper">
                <el-checkbox v-model="form.key" fill="#e5b467">
                  我已阅读并接受
                  <span class="yellow">用户协议</span>和
                  <span class="yellow">隐私政策</span>
                </el-checkbox>
                <span class="text">组织用户登录</span>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="密码登录" name="password">密码登录</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Sidentify from "@/components/Sidentify";
export default {
  components: {
    Sidentify
  },
  props: {},
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.identifyCode !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      activeName: "sms",
      form: {
        phone: "",
        sidentify: "",
        smsCode: ""
      },
      loginRules: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
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
  created() {
    this.refreshCode();
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/global";
//pc
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .app-main {
    width: 100%;
    height: 100%;
    background: url("../../../../static/image/pc/bg.png") no-repeat;
    background-size: auto;
    display: flex;
    @mixin form() {
      .el-form {
        .el-form-item__content {
          line-height: 0;
        }
        .code-wrapper {
          margin-bottom: 10px;
        }
        .item-text {
          font-size: 12px;
          margin-bottom: 12px;
          color: #999999;
        }
        .smsCode-wrapper {
          .send-button {
            background-color: #eeeeee;
            border-radius: 4px;
            width: 112px;
            height: 40px;
            margin: 0;
            padding: 0;
            border: 1px solid transparent; //自定义边框
            outline: none;
            color: #666666;
            @include center;
            &:active {
              background-color: #999999;
              color: #fff;
            }
          }
        }
        .submit-wrapper {
          width: 100%;
          height: 40px;
          .submit {
            width: 100%;
            height: 40px;
            font-size: 18px;
            text-indent: 4px;
            letter-spacing: 4px;
          }
        }
        .desc-wrapper {
          display: flex;
          justify-content: space-between;
          .yellow {
            color: #e5b467;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
    .center-wrapper {
      margin: 0 auto;
      width: 420px;
      height: 500px;
      background-color: #ffffff;
      box-shadow: 0px 0px 21px 0px rgba(13, 13, 13, 0.14);
      border-radius: 4px;
      padding: 0 25px;
      box-sizing: border-box;
      align-self: center;
      /deep/ .el-tabs {
        .el-tabs__item {
          font-size: 18px;
          line-height: 72px;
          height: 70px;
          color: #999999;
        }
        .el-tabs__item.is-active {
          color: #333333;
        }
        .el-tabs__active-bar {
          background-color: #313131;
        }
        .el-tabs__nav-wrap::after {
          background-color: #eeeeee;
        }
        .el-tabs__content {
          font-size: 14px;
          padding: 15px 0;
          height: 400px;
          box-sizing: border-box;
          @include form;
        }
      }
    }
  }
}
</style>