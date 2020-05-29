<template>
  <div class="phone-way-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="手机号/用户编号/邮箱" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="请输入验证码" />
        </div>
        <div class="getValid">获取验证码</div>
      </div>
      <div class="help-wrapper">
        <div class="right-wrapper" @click="show=true">忘记密码</div>
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
.phone-way-wrapper {
  width: 100%;
  height: 100%;
}
</style>