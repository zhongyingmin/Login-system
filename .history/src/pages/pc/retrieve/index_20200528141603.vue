<template>
  <div class="retrieve-wrapper">
    <div class="main-wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true" :before-leave="switch">
        <el-tab-pane label="1.输入用户名" name="1">输入用户名</el-tab-pane>
        <el-tab-pane label="2.验证" name="2">验证</el-tab-pane>
        <el-tab-pane label="3.重置密码" name="3">重置密码</el-tab-pane>
        <el-tab-pane label="4.设置成功" name="4">设置成功</el-tab-pane>
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
      activeName: "1"
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick() {},
    switch(){
        return new Promise((reject,resolve)=>{
            reject()
        });
    }
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
    padding: 5px 30px 0;
    box-sizing: border-box;
    align-self: center;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #d2d2d2;
    /deep/ .el-tabs {
      .el-tabs__header.is-top {
        .el-tabs__nav {
          .el-tabs__item {
            height: 65px;
            line-height: 65px;
            font-size: 18px;
            letter-spacing: 2px;
            color: #999999;
          }
        //   .el-tabs__item:hover {
        //     color: #409eff;
        //     cursor: pointer;
        //   }
          .el-tabs__item.is-active {
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>