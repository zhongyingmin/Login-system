<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="title-wrapper">机构登录</div>
      <div class="logo-wrapper"></div>
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
          <input type="text" placeholder />
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
        <div class="right-wrapper">密码登录</div>
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
    }
  }
  .form-wrapper {
    padding: 0 40px 20px;
    box-sizing: border-box;
    .input-wrapper {
      position: relative;
      display: flex;
      line-height: 40px;
      background-color: #fff;
      margin-bottom: 22px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid #d2d2d2;
      }
    }
    &:last-child {
      margin-bottom: 0;
      background-color: red;
    }
    .text_wrapper {
      color: #999999;
      font-size: 13px;
    }
    .slider {
      width: 100%;
      height: 40px;
      background-color: #eeeeee;
      margin-bottom: 35px;
    }
    .label {
      width: auto;
      text-align: justify;
      text-align-last: justify;
      margin-right: 10px;
      color: #333333;
    }
    .text-input {
      flex: 1;
    }
    .getValid {
      width: 7rem;
      height: 40px;
      color: #999999;
      border: solid 1px #d5d5d5;
      @include center;
    }
    .submit-wrapper {
      width: 100%;
      height: 45px;
      @include center;
      .submit {
        height: 100%;
        color: #fff;
        background-color: #73befb;
        &:hover {
          background-color: rgba(115, 190, 251, 0.9);
        }
      }
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