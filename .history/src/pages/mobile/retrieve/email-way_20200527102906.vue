<template>
  <div class="email-way-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="输入已绑定的手机号" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="请输入验证码" />
        </div>
        <div class="getValid">获取验证码</div>
      </div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">下一步</button>
      </div>
    </form></div>
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
.email-way-wrapper {
  width: 100%;
  height: 100%;
}
</style>