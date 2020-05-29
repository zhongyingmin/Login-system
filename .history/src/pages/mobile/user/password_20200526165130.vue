<template>
  <div class="password-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="icon">
          <svg-icon icon-class="user" />
        </div>
        <div class="text-input">
          <input type="text" placeholder="手机号/用户编号/邮箱" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="icon">
          <svg-icon icon-class="password" />
        </div>
        <div class="text-input">
          <input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="help-wrapper">
        <div class="right-wrapper" @click="show=true">忘记密码</div>
      </div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">登录</button>
      </div>
    </form>
    <van-overlay :show="show" @click="show=false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false
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
.password-wrapper {
  width: 100%;
  height: 100%;
  .form-wrapper {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    .help-wrapper {
      padding-top: 10px;
      box-sizing: border-box;
      width: 100%;
      font-size: 13px;
      text-align: right;
      color: #999999;
      margin-bottom: 30px;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    .block {
      width: 120px;
      height: 120px;
      background-color: #fff;
    }
  }
}
</style>