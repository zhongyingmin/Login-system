<template>
  <div class="password-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="icon">
          <svg-icon icon-class="user" />
        </div>
        <div class="text-input">
          <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="icon">手机号</div>
        <div class="text-input">
          <input type="text" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="help-wrapper">
        <router-link tag="div" class="right-wrapper" to="user/password">忘记密码</router-link>
      </div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
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
.password-wrapper {
  width: 100%;
  height: 100%;
  .form-wrapper {
    padding: 40px;
  }
}
</style>