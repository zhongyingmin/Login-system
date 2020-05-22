<template>
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
</template>

<script>
export default {
  name: "thirdParty",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
