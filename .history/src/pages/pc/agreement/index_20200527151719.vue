<template>
  <div class="agreement-wrapper">
    <el-tabs tab-position="left">
      <el-tab-pane label="用户协议">用户协议</el-tab-pane>
      <el-tab-pane label="隐私政策">隐私政策</el-tab-pane>
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
    . .el-tabs__header.is-left {
      width: 200px;
      background-color: #fff;
      . .el-tabs__active-bar.is-left,
      . .el-tabs__nav-wrap.is-left::after {
        right: auto;
        left: 0;
      }
      . .el-tabs__item.is-left {
        text-align: left;
      }
    }
    .el-tabs__content {
      background-color: #fff;
    }
  }
}
</style>