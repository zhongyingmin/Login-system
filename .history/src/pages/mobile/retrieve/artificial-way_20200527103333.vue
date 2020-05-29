<template>
  <div class="artificial-way-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="label">账号</div>
        <div class="text-input">
          <input type="text" placeholder="手机号/邮箱/用户编号/用户名" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label">联系方式</div>
        <div class="text-input">
          <input type="text" placeholder="输入您的联系方式" />
        </div>
        <div class="getValid">获取验证码</div>
      </div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">提交</button>
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
.artificial-way-wrapper {
  width: 100%;
  height: 100%;
  .form-wrapper {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    .label{
      width: 4rem;
    }
    .slider {
      width: 100%;
      height: 40px;
      background-color: #eeeeee;
      margin-bottom: 35px;
    }
    .input-wrapper:nth-of-type(2){
      margin-bottom: 22px;
    }
  }
}
</style>