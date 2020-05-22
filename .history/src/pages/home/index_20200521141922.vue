<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="content-wrapper">
        <div class="title">
          <div class="logo_title"></div>
        </div>
        <div></div>
        <div></div>
      </div>
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
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  @mixin content() {
    .content-wrapper {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 150px 0 120px;
      .title {
        width: 100%;
        @include center;
        .logo_title {
          width: 50px;
          height: 20px;
          background: url("../../../static/image/mobile/bg.png") no-repeat;
        }
      }
    }
  }
  //pc
  @media only screen and (min-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: url("../../../static/image/pc/bg.png") no-repeat;
      background-size: cover;
    }
  }
  //移动
  @media only screen and (max-width: 375px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      &::after {
        content: "";
        position: fixed;
        width: 434px;
        height: 403px;
        background: url(/static/img/bg.f6fdba4.png) no-repeat;
        background-size: 100% 100%;
        top: 55px;
        left: -58px;
      }
      @include content;
    }
  }
  @media only screen and (min-width: 376px) and (max-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      &::after {
        content: "";
        position: fixed;
        width: 480px;
        height: 449px;
        background: url(/static/img/bg.f6fdba4.png) no-repeat;
        background-size: 100% 100%;
        top: 90px;
        left: -64px;
      }
    }
  }
}
</style>