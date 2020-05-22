<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="content-wrapper">
        <div class="title">
          <div class="logo_title"></div>
        </div>
        <div class="entrance-wrapper">
          <div class="ordinary h-button">普通用户登录</div>
          <div class="organization h-button">组织用户登录</div>
          <div class="block">
            <el-link type="primary">
              <span>去注册</span>
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </div>
        <div class="third-party">
          <div class="format">第三方登录</div>
          <div class="icon-wrapper">
            <div class="icon left">
              <i class="icon-48-38-60-47"></i>
            </div>
            <div class="icon right">
              <i class="icon-48-38"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
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
@import "../../styles/global";
.home-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  @mixin content($cp-num, $mb-num) {
    .content-wrapper {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: $cp-num 0 120px;
      z-index: 2;
      .title {
        width: 100%;
        text-align: center;
        margin-bottom: $mb-num;
        .logo_title {
          display: inline-block;
          width: 250px;
          height: 40px;
          background: url("../../../static/image/mobile/Logo_title.png")
            no-repeat;
        }
      }
      .entrance-wrapper {
        width: 260px;
        height: 200px;
        margin: 0 auto;
        .h-button {
          width: 260px;
          height: 55px;
          box-shadow: 0px 2px 7px 0px rgba(2, 25, 70, 0.34);
          border-radius: 50px;
          letter-spacing: 3px;
          font-size: 14px;
          @include center;
          &:first-child {
            margin-bottom: 25px;
          }
        }
        .ordinary {
          color: #fff;
          background-image: linear-gradient(-78deg, #4b80ea 0%, #73befb 100%);
        }
        .organization {
          color: #333333;
          background-color: #fff;
        }
        .block {
          width: 100%;
          font-size: 14px;
          margin-top: 10px;
          text-align: center;
          .el-link {
            margin-left: 10px;
            font-size: 13px;
          }
        }
      }
      .third-party {
        width: 100%;
        .icon-wrapper {
          width: 100%;
          height: 30px;
          .icon {
            width: 30px;
            height: 30px;
            @include center;
            border-radius: 50%;
          }
          .left{
            background-color: #22ac38;
          }
          .right{
            background-color: #73befb;
          }
        }
        .format {
          width: 100%;
          text-align: center;
          font-size: 15px;
          color: #000;
          letter-spacing: 4px;
        }
      }
    }
  }
  //pc
  @media only screen and (min-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: url("../../../static/image/pc/bg.png") no-repeat;
      background-size: auto;
    }
  }
  //移动
  @media only screen and (max-width: 375px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 434px;
        height: 403px;
        background: url("../../../static/image/mobile/bg.png") no-repeat;
        background-size: 100% 100%;
        top: 65px;
        left: -58px;
        z-index: -1;
      }
      @include content(110px, 110px);
    }
  }
  @media only screen and (min-width: 376px) and (max-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 480px;
        height: 449px;
        background: url("../../../static/image/mobile/bg.png") no-repeat;
        background-size: 100% 100%;
        top: 90px;
        left: -64px;
        z-index: -1;
      }
      @include content(130px, 140px);
    }
  }
}
</style>