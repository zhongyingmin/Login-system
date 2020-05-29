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
            <el-form-item :class="{'item_el':state_switch=='2'}">
              <el-select v-model="state_switch" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form
              :model="phoneForm"
              status-icon
              ref="phoneForm"
              label-width="100px"
              class="demo-phoneForm"
              v-show="state_switch==1"
            >
              <el-form-item label="注册手机号:" prop="phone">
                <el-input
                  type="text"
                  v-model="phoneForm.phone"
                  placeholder="输入注册手机号"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="图形验证码:" prop="Verification_code">
                <el-input
                  type="password"
                  v-model="phoneForm.phone_code"
                  placeholder="验证码"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('phoneForm')">确认</el-button>
              </el-form-item>
            </el-form>
            <el-form
              :model="artificialForm"
              status-icon
              ref="artificialForm"
              label-width="100px"
              class="demo-artificialForm"
              v-show="state_switch==2"
            >
              <el-form-item style="margin:0">
                <span style="font-size:13px;letter-spacing: 0px;color: #eac385;">请填写以下信息，稍后我们会联系您</span>
              </el-form-item>
              <el-form-item label="账号:" prop="account">
                <el-input
                  type="text"
                  v-model="artificialForm.account"
                  placeholder="输入手机号/邮箱/用户编号/用户名"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="联系方式:" prop="contact">
                <el-input
                  type="password"
                  v-model="artificialForm.contact"
                  placeholder="输入您的联系方式"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="图形验证码:" prop="artificial_code">
                <el-input
                  type="password"
                  v-model="artificialForm.artificial_code"
                  placeholder="验证码"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('artificialForm')">提交</el-button>
              </el-form-item>
            </el-form>
            <el-form
              :model="emailForm"
              status-icon
              ref="emailForm"
              label-width="100px"
              class="demo-emailForm"
              v-show="state_switch==3"
            >
              <el-form-item label="邮箱:" prop="email">
                <el-input
                  type="text"
                  v-model="emailForm.email"
                  placeholder="输入邮箱"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="图形验证码:" prop="email_code">
                <el-input
                  type="password"
                  v-model="emailForm.email_code"
                  placeholder="验证码"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('emailForm')">确认</el-button>
              </el-form-item>
            </el-form>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="2.验证" name="2">
          <el-form :model="codeForm" status-icon ref="codeForm" class="demo-codeForm">
            <el-form-item style="margin-bottom:10px">
              <div class="divider-wrapper">
                <div class="divider"></div>
                <span>请填写收到的短信验证码</span>
              </div>
            </el-form-item>
            <el-form-item style="margin-bottom:50px">
              <el-row :gutter="20">
                <el-col :span="16">
                  <el-input placeholder="请输入短信验证码" type="text"></el-input>
                </el-col>
                <el-col :span="8">
                  <button type="button" class="code-col">发送验证码</button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('emailForm')">确认</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="3.重置密码" name="3">
          <el-form
            :model="passwordForm"
            label-width="100px"
            status-icon
            ref="passwordForm"
            class="demo-passwordForm"
          >
            <el-form-item label="密码：" prop="password">
              <el-input
                type="text"
                v-model="passwordForm.password"
                placeholder="请设定登录密码"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-bottom:35px" label="确认密码：" prop="checkPass">
              <el-input
                type="text"
                v-model="passwordForm.checkPass"
                placeholder="请再输入一次登录密码"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('emailForm')">确认</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
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
      passwordForm: {},
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
        phone: "",
        phone_code: "",
        account: "",
        contact: "",
        Artificial_code: "",
        email: "",
        email_code: ""
      },
      phoneForm: {},
      artificialForm: {},
      emailForm: {},
      activeName: "1",
      state: false,
      rules: {},
      codeForm: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    moreState(tab, event) {
      //   console.log(tab);
      //   console.log(event);
      if (this.state) {
        this.state = false;
        return true;
      }
      this.activeName = "1";
      return false;
    },
    next() {
      this.activeName = Number(this.activeName);
      this.state = true;
      this.activeName++;
      this.activeName = this.activeName.toString();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.next();
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
@import "../../../styles/global";
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
      }
    }
    .demo-ruleForm {
      padding-left: 80px;
      width: 450px;
      .item_el {
        margin: 0;
      }
    }
    .demo-codeForm {
      width: 350px;
      margin: 30px auto 0;
      .divider-wrapper {
        display: flex;
        align-items: center;
        .divider {
          display: inline-block;
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background-color: #eac385;
          margin-right: 5px;
        }
      }
      .code-col {
        display: flex;
        @include center;
        background-color: #eeeeee;
        border-radius: 4px;
        margin: 0;
        padding: 0;
        width: 100%;
        outline: none;
        -webkit-appearance: none;
        font-size: 14px;
        cursor: pointer;
        border: 0 solid transparent;
        &:active {
          background-color: #999999;
          color: #fff;
        }
      }
    }
    .demo-passwordForm {
      width: 450px;
      padding: 30px 0 30px 80px;
    }
    .el-button {
      width: 100%;
      height: 45px;
      font-size: 18px;
      text-indent: 4px;
      letter-spacing: 4px;
    }
  }
}
</style>