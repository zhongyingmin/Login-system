<template>
  <div class="retrieve-wrapper">
    <div class="main-wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="1.输入用户名" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="2.验证" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="3.重置密码" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="4.设置成功" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
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
    handleClick() {}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.retrieve-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .main-wrapper {
    width: 750px;
    height: 450px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
    align-self: center;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #d2d2d2;
    /deep/ .el-tabs {
      .el-tabs__header.is-top {
        .el-tabs__nav {
          .el-tabs__item {
            height: 50px;
            line-height: 50px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>