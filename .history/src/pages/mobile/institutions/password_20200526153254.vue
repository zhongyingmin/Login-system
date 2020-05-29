<template>
  <div class="institutions-wrapper">
    <div class="header">
      <div class="title-wrapper"></div>
      <div class="logo-wrapper">
        <div class="logo">
          <div class="logo_title"></div>
          <span>上海岐素信息科技有限公司</span>
        </div>
      </div>
    </div>
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="label">用户</div>
        <div class="text-input">
          <input type="text" placeholder="请输入用户名/邮箱" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label">密码</div>
        <div class="text-input">
          <input type="text" placeholder="请输入您的密码" />
        </div>
        <div class="icon-right">

        </div>
      </div>
      <div class="text_wrapper">该邮箱未注册，输入验证码后自动注册</div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">登录</button>
      </div>
      <div class="desc-wrapper">
        <router-link tag="div" class="right-wrapper" to="institutions">忘记密码</router-link>
        <router-link tag="div" class="right-wrapper" to="institutions">验证码登录</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
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
.institutions-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/mobile/app_bg.png") no-repeat;
  background-size: 100% 100%;
  .header {
    padding: 30px 20px;
    box-sizing: border-box;
    .title-wrapper {
      height: 16px;
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
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
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