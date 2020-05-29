<template>
  <div class="retrieve-wrapper">
    <div class="main-wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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
      handleClick(){
          
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
    padding: 20px 30px;
    box-sizing: border-box;
    align-self: center;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #d2d2d2;
  }
}
</style>