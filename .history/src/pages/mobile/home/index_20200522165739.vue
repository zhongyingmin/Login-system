<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="content-wrapper">
        <div class="title">
          <div class="logo_title"></div>
          <span>上海岐素信息科技有限公司</span>
        </div>
        <div class="entrance-wrapper">
          <router-link to="user" tag="div" class="ordinary h-button">普通用户登录</router-link>
          <div class="organization h-button">组织用户登录</div>
          <div class="block">
            <el-link type="primary">
              <span>去注册</span>
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </div>
        <third-party />
      </div>
    </div>
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
@import "../../../styles/global";
.home-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  @mixin content(
    $cp-num /*大容器内边距top*/,
    $mb-num /*title容器的top*/,
    $e-height /*中间容器高度*/,
    $after-width,
    $after-height,
    $after-top,
    $after-left
  ) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: $after-width;
        height: $after-height;
        background: url("../../../../static/image/mobile/bg.png") no-repeat;
        background-size: 100% 100%;
        top: $after-top;
        left: $after-left;
        z-index: -1;
      }
      .content-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: $cp-num 0 120px;
        z-index: 2;
        .title {
          width: 240px;
          height: 40px;
          margin: 0 auto;
          position: relative;
          margin-bottom: $mb-num;
          .logo_title {
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100px;
            height: 100%;
            background: url("../../../../static/image/mobile/logo-title.png")
              no-repeat;
          }
          span {
            position: absolute;
            left: 52px;
            top: 22px;
            font-size: 14px;
            font-weight: 600;
          }
        }
        .entrance-wrapper {
          width: 260px;
          height: $e-height;
          margin: 0 auto;
          .h-button {
            width: 100%;
            height: 55px;
            box-shadow: 0px 2px 7px 0px rgba(2, 25, 70, 0.34);
            border-radius: 50px;
            letter-spacing: 3px;
            font-size: 15px;
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
      }
    }
  }
  // @include content(130px, 140px, 210px, 480px, 449px, 90px, -64px);
  //移动
  @media only screen and (max-width: 375px) {
    @include content(110px, 110px, 185px, 434px, 403px, 65px, -58px);
  }
  @media only screen and (min-width: 376px) and (max-width: 414px) {
    @include content(130px, 140px, 210px, 480px, 449px, 90px, -64px);
  }
  @media only screen and (min-width: 415px) and (max-width: 850px) {
    @include content(130px, 240px, 380px, 927px, 856px, 0px, -155px);
    .entrance-wrapper {
      width: 400px !important;
      .h-button {
        height: 80px !important;
        font-size: 24px !important;
      }
    }
    .title {
      width: 300px !important;
      height: 45px !important;
      span {
        font-size: 20px !important;
      }
    }
  }
  // @media only screen and (min-width: 851px) and (max-width: 1025px) {
  //   @include content(130px, 240px, 380px, 1187px, 1126px, 0px, -155px);
  // }
}
</style>