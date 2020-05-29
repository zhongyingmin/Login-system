<template>
  <div class="institutions-wrapper">
    <div class="main-wrapper">
      <div class="title">组织用户登录</div>
      <div class="content"></div>
    </div>
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
.institutions-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/pc/bg.png") no-repeat;
  background-size: auto;
  display: flex;
  .main-wrapper {
    margin: 0 auto;
    width: 440px;
    height: 540px;
    background-color: #ffffff;
    box-shadow: 0px 0px 21px 0px rgba(13, 13, 13, 0.14);
    border-radius: 4px;
    padding: 0 25px;
    box-sizing: border-box;
    align-self: center;
    .title{
        line-height: 50px;
    }
  }
}
</style>