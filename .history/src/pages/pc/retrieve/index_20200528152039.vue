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
            <el-form-item>
              <el-select v-model="state_switch" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <div v-show="state_switch==1">
              <el-form-item label="注册手机号:" prop="phone">
                <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="图形验证码:" prop="Verification_code">
                <el-input type="password" v-model="ruleForm.phone_code" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
              </el-form-item>
            </div>
            <div v-show="state_switch==2">
              <el-form-item label="账号:" prop="account">
                <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式:" prop="contact">
                <el-input type="password" v-model="ruleForm.contact" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="图形验证码:" prop="Verification_code">
                <el-input type="password" v-model="ruleForm.Artificial_code" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
              </el-form-item>
            </div>
            <div v-show="state_switch==3">
              <el-form-item label="账号:" prop="account">
                <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式:" prop="password">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              </el-form-item>
            </div>
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
      options: [
        {
          value: "1",
          label: "手机号找回"
        },
        {
          value: "2",
          label: "人工找回"
        },
        {
          value: "3",
          label: "邮箱找回"
        }
      ],
      state_switch: "1",
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
      .el-tabs__content {
        padding-left: 80px;
      }
    }
    .demo-ruleForm {
      width: 450px;
      .el-button {
        width: 100%;
        height: 45px;
        font-size: 18px;
        text-indent: 4px;
        letter-spacing: 4px;
      }
    }
  }
}
</style>