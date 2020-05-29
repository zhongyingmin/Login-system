<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="title-wrapper">机构登录</div>
      <div class="logo-wrapper">
        <div class="logo">
          <div class="logo_title"></div>
          <span>上海岐素信息科技有限公司</span>
        </div>
      </div>
    </div>
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="label">手机号</div>
        <div class="text-input">
          <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label">验证码</div>
        <div class="text-input">
          <input type="text" placeholder="请输入验证码" />
        </div>
        <div class="getValid">获取验证码</div>
      </div>
      <div class="text_wrapper">未注册的手机号验证码后自动创建账户</div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">登录</button>
      </div>
      <div class="desc-wrapper">
        <div class="left-wrapper">
          <el-checkbox v-model="loginForm.key"></el-checkbox>我已阅读并接受
          <span class="yellow">用户协议</span>
          和
          <span class="yellow">隐私政策</span>
        </div>
        <router-link tag="div" class="right-wrapper" to="/password">密码登录</router-link>
      </div>
    </form>
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
        key: false
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    cSubmit() {
      console.log(1);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/global";
@import "@/assets/styles/mobile/index.scss";
.user-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/mobile/app_bg.png") no-repeat;
  background-size: 100% 100%;
  .header {
    padding: 30px 20px;
    box-sizing: border-box;
    .title-wrapper {
      text-align: right;
      color: #ffffff;
    }
    .logo-wrapper {
      width: 100%;
      height: 20vh;
      .logo {
        width: 240px;
        height: 35px;
        margin: 0 auto;
        position: relative;
        top: 40%;
        .logo_title {
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
          width: 85px;
          height: 100%;
          background: url("../../../../static/image/mobile/logo-title.png")
            no-repeat;
          background-size: cover;
        }
        span {
          position: absolute;
          left: 52px;
          top: 22px;
          font-size: 13px;
          color: #fff;
        }
      }
    }
  }
  .form-wrapper {
    padding: 0 40px 20px;
    box-sizing: border-box;
    .text_wrapper {
      color: #999999;
      font-size: 13px;
      margin: 5px 0 20px;
    }
    .slider {
      width: 100%;
      height: 40px;
      background-color: #eeeeee;
      margin-bottom: 35px;
    }
    .desc-wrapper {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: #999999;
      .left-wrapper {
        .el-checkbox {
          margin-right: 5px;
        }
        .yellow {
          color: #e5b467;
        }
      }
    }
  }
}
</style>