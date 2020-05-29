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
              <el-form-item prop="sidentify">
                <el-row :gutter="20">
                  <el-col :span="10">
                    <el-input
                      placeholder="验证码"
                      v-model="form.password"
                      @keyup.enter.native="submitForm('ruleForm')"
                    ></el-input>
                  </el-col>
                  <el-col :span="8" :offset="6"  @click="refreshCode">
                    <sidentify :identifyCode="identifyCode" style="width:112px" />
                  </el-col>
                </el-row>
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
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      activeName: "sms",
      form: {
        phone: ""
      }
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
      console.log(this.identifyCode);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
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