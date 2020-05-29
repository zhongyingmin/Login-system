<template>
  <div class="institutions-wrapper">
    <div class="header">
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
        <router-link tag="div" class="right-wrapper" to="user/password">密码登录</router-link>
      </div>
    </form>
    <third-party />
  </div>
</template>

<script>
export default {
  components: {},
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
.institutions-wrapper {
  width: 100%;
  height: 100%;
}
</style>