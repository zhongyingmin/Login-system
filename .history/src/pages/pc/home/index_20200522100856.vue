<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="content-wrapper">
        <div class="title">
          <div class="logo_title"></div>
          <span>上海岐素信息科技有限公司</span>
        </div>
        <div class="entrance-wrapper">
          <div class="ordinary h-button">普通用户登录</div>
          <div class="organization h-button">组织用户登录</div>
          <div class="block">
            <el-link type="primary">
              <span>去注册</span>
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </div>
        <div class="third-party">
          <div class="format">第三方登录</div>
          <div class="icon-wrapper">
            <div class="icon left">
              <i class="icon-48-38-60-47 iconfont"></i>
            </div>
            <div class="icon right">
              <i class="icon-48-38 iconfont"></i>
            </div>
          </div>
        </div>
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
@import "../../../styles/global";
.home-wrapper {
  width: 100%;
  height: 100%;
  // position: fixed;
  overflow: hidden;
  //pc
  @media only screen and (min-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: url("../../../../static/image/pc/bg.png") no-repeat;
      background-size: auto;
    }
  }
}
</style>