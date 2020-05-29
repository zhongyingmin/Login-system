<template>
  <div class="retrieve-wrapper">
    <div class="main-wrapper">
      <el-tabs v-model="activeName" :before-leave="moreState" :stretch="true">
        <el-tab-pane label="1.输入用户名" name="1">
          <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="注册手机号:" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图形验证码:" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
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
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      activeName: "1"
    };
  },
  watch: {},
  computed: {},
  methods: {
    moreState(tab, event) {
      console.log(tab);
      console.log(event);
      if (tab - event == 1) {
        console.log("通过");
      }
      this.activeName = "1";
      return false;
    },
    next() {
      this.activeName++;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
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
    .demo-ruleForm{
        width: 450px;
    }
  }
}
</style>