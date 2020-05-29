<template>
  <div class="reset-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="输入新密码" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="text-input">
          <input type="text" placeholder="请再次输入密码" />
        </div>
      </div>
      <div class="slider"></div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">确定</button>
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
  methods: {
      cSubmit(){}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mobile/index.scss";
.reset-wrapper {
  width: 100%;
  height: 100%;
}
</style>