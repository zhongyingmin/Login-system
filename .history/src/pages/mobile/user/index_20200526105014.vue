<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="title-wrapper">机构登录</div>
      <div class="logo-wrapper"></div>
    </div>
    <form action class="form-wrapper">
      <div class="input-wrapper">
        <div class="label">手机号</div>
        <div class="text-input">
        <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label">验证码</div>
        <div class="text-input">
          <input type="text" placeholder />
        </div>
        <div class="getValid">获取验证码</div>
      </div>
      <div class="text_wrapper">未注册的手机号验证码后自动创建账户</div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" class="submit">登录</button>
      </div>
      <div class="desc-wrapper">
        <el-checkbox v-model="loginForm.key"></el-checkbox>我已阅读并接受
        <span class="yellow">用户协议</span>和
        <span class="yellow">隐私政策</span>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
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
    }
  }
  .form-wrapper {
    padding: 0 40px 30px;
    box-sizing: border-box;
    > div {
      display: flex;
    }
  }
}
</style>