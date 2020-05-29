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
    .title {
      line-height: 80px;
      font-size: 18px;
      letter-spacing: 2px;
      color: #333333;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #eeeeee;
        border-radius: 1px;
      }
    }
  }
  .content{
      padding: 30px 0;
  }
}
</style>