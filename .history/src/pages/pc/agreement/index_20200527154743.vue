<template>
  <div class="agreement-wrapper">
    <el-tabs tab-position="left">
      <el-tab-pane label="用户协议">
        <div class="title">用户协议</div>
        <div class="content">内容</div>
      </el-tab-pane>
      <el-tab-pane label="隐私政策">
        <div class="title">隐私政策</div>
        <div class="content">内容</div>
      </el-tab-pane>
    </el-tabs>
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
.agreement-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 100px 150px 30px;
  background-color: #eeeeee;
  /deep/ .el-tabs {
    .el-tabs__header.is-left {
      width: 230px;
      background-color: #fff;
      padding: 10px 0;
      box-sizing: border-box;
      .el-tabs--left .el-tabs__nav-wrap.is-left {
        margin-right: 0;
      }
      .el-tabs__active-bar.is-left,
      .el-tabs__active-bar.is-right,
      .el-tabs--right .el-tabs__active-bar.is-left,
      .el-tabs--right .el-tabs__active-bar.is-right {
        width: 3px;
      }
      .el-tabs__active-bar.is-left,
      .el-tabs__nav-wrap.is-left::after {
        right: auto;
        left: 0;
      }
      .el-tabs__active-bar {
        background-color: #eac385;
      }
      .el-tabs__item:hover {
        color: #eac385;
        cursor: pointer;
      }
      .el-tabs__item.is-active {
        color: #eac385;
      }
      .el-tabs__nav-wrap::after {
        content: none;
      }
      .el-tabs__item.is-left {
        text-align: left;
      }
      .el-tabs__item {
        padding-left: 30px;
        font-size: 16px;
      }
    }
    .el-tabs__content {
      background-color: #fff;
    }
  }
  .title {
    padding: 0 30px;
    line-height: 50px;
    font-size: 18px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #eeeeee;
    }
  }
  .content {
    padding: 30px;
  }
}
</style>