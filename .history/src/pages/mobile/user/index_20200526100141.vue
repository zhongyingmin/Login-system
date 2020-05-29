<template>
  <div class="user-wrapper">
    <div class="header">
      <div class="title-wrapper">机构登录</div>
      <div class="logo-wrapper"></div>
    </div>
    <mt-button plain>plain</mt-button>
    <third-party />
  </div>
</template>

<script>
import ThirdParty from "@/components/ThirdParty";
export default {
  components: {
    ThirdParty
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.user-wrapper {
  width: 100%;
  height: 100%;
  background: url("../../../../static/image/mobile/app_bg.png") no-repeat;
  background-size: 100% 100%;
  .header {
    padding: 30px 20px;
    box-sizing: border-box;
    .title-wrapper {
      text-align: right;
      color: #ffffff;
    }
    .logo-wrapper{
      width: 100%;
      height: 20vh;
    }
  }
  .el-form {
    padding: 0 50px;
    box-sizing: border-box;
    .desc-wrapper {
      margin-top: 10px;
      .el-form-item__content {
        .el-checkbox {
          color: #666666;
          .el-checkbox__inner:hover {
            border-color: #e5b467;
          }
          .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #e5b467;
          }
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            color: #e5b467;
            background-color: #e5b467;
            border-color: #e5b467;
          }
          .yellow {
            color: #e5b467;
          }
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #666666;
          }
        }
        .text-wrapper {
          color: #999999;
          font-size: 14px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>