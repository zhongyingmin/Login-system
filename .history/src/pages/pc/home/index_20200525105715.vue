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
                <el-col :span="14">
                  <el-input
                    placeholder="验证码"
                    v-model="form.password"
                    @keyup.enter.native="submitForm('ruleForm')"
                  ></el-input>
                </el-col>
                <el-col :span="8" :offset="4">
                  <sidentify></sidentify>
                </el-col>
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
      activeName: "sms",
      form: {
        phone: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  created() {},
  mounted() {}
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
        }
      }
    }
  }
}
</style>