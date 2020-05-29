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
                <el-row :span="24" :gutter="15">
                  <el-col :span="14">
                    <el-input placeholder="请输入验证码" v-model="form.sidentify"></el-input>
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
                      v-model="form.smsCode"
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
                    <el-checkbox v-model="form.key">我已阅读并接受<span class="yellow">用户协议</span>和<span class="yellow">隐私政策</span></el-checkbox>
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
        > .el-form-item__content {
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
            width: 120px;
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
          margin-bottom: 0;
          .submit {
            width: 100%;
            height: 45px;
            font-size: 18px;
            text-indent: 4px;
            letter-spacing: 4px;
          }
        }
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
    .center-wrapper {
      margin: 0 auto;
      width: 440px;
      height: 540px;
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
          padding: 15px 0 0;
          height: 440px;
          box-sizing: border-box;
          @include form;
          .third-party {
            width: 100%;
            height: auto;
            text-align: center;
            .title-wrapper {
              font-size: 17px;
              color: #888888;
              margin-bottom: 25px;
            }
            .icon-wrapper {
              width: 100%;
              height: auto;
              padding: 0 30%;
              box-sizing: border-box;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              .icon {
                width: 50px;
                height: 50px;
                @include center;
                border-radius: 50%;
                box-sizing: border-box;
                .iconfont {
                  font-size: 30px;
                  color: #fff;
                }
              }
              .left {
                background-color: #22ac38;
                padding-top: 5px;
              }
              .right {
                background-color: #73befb;
              }
            }
          }
        }
      }
    }
  }
}
</style>