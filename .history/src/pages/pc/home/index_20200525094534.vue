<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="center-wrapper">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="短信登录" name="first">短信登录</el-tab-pane>
          <el-tab-pane label="密码登录" name="second">密码登录</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeName: "second"
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../../styles/global";
//pc
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .app-main {
    width: 100%;
    height: 100%;
    background: url("../../../../static/image/pc/bg.png") no-repeat;
    background-size: auto;
    .center-wrapper {
      margin: 0 auto;
      width: 400px;
      height: 500px;
      background-color: #ffffff;
      box-shadow: 0px 0px 21px 0px rgba(13, 13, 13, 0.14);
      border-radius: 4px;
      padding: 15px 25px;
      box-sizing: border-box;
      &:after {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>