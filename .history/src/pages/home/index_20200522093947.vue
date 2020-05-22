<template>
  <div class="home-wrapper">
    <div class="home app-main">
      <div class="content-wrapper">
        <div class="title">
          <div class="logo_title"></div>
          <span>上海岐素信息科技有限公司</span>
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
              <i class="icon-48-38-60-47 iconfont"></i>
            </div>
            <div class="icon right">
              <i class="icon-48-38 iconfont"></i>
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
  @mixin content(
    $cp-num /*大容器内边距top*/,
    $mb-num /*title容器的top*/,
    $e-height /*中间容器高度*/
  ) {
    .content-wrapper {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: $cp-num 0 120px;
      z-index: 2;
      .title {
        width: 250px;
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
          height: 40px;
          background: url("../../../static/image/mobile/logo-title.png")
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
        .format {
          width: 100%;
          text-align: center;
          font-size: 15px;
          color: #000;
          letter-spacing: 4px;
          margin-bottom: 25px;
        }
        .icon-wrapper {
          width: 100%;
          height: auto;
          padding: 0 30%;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .icon {
            width: 50px;
            height: 50px;
            @include center;
            border-radius: 50%;
            box-sizing: border-box;
            .iconfont {
              font-size: 30px;
              color: #fff;
            }
          }
          .left {
            background-color: #22ac38;
            padding-top: 5px;
          }
          .right {
            background-color: #73befb;
          }
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
      @include content(110px, 110px, 185px); //大容器内边距top   title容器的top
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
      @include content(130px, 140px, 210px);
    }
  }
}
</style>