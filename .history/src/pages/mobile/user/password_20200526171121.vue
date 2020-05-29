<template>
  <div class="password-wrapper">
    <form action ref="form-wrapper" class="form-wrapper">
      <div class="input-wrapper">
        <div class="icon">
          <svg-icon icon-class="user" />
        </div>
        <div class="text-input">
          <input type="text" placeholder="手机号/用户编号/邮箱" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="icon">
          <svg-icon icon-class="password" />
        </div>
        <div class="text-input">
          <input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="help-wrapper">
        <div class="right-wrapper" @click="show=true">忘记密码</div>
      </div>
      <div class="submit-wrapper">
        <button type="submit" @click.prevent="cSubmit" class="submit">登录</button>
      </div>
    </form>
    <van-overlay :show="show" @click="show=false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="title-wrapper">请选择密码找回方式</div>
          <div class="content-wrapper">
            <div class="link-wrapper">
              <div class="text">手机号找回</div>
              <div class="icon">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="link-wrapper">
              <div class="text">邮箱找回</div>
              <div class="icon">
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="link-wrapper">
              <div class="text">人工找回</div>
              <div class="icon">
                <van-icon name="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mobile/index.scss";
.password-wrapper {
  width: 100%;
  height: 100%;
  .form-wrapper {
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    .help-wrapper {
      padding-top: 10px;
      box-sizing: border-box;
      width: 100%;
      font-size: 13px;
      text-align: right;
      color: #999999;
      margin-bottom: 30px;
    }
  }

  .wrapper {
    @include center;
    width: 100%;
    height: 100%;
    .block {
      width: 300px;
      height: 350px;
      background-color: #fff;
      border-radius: 6px;
      .title-wrapper {
        width: 100%;
        height: auto;
        line-height: 50px;
        font-size: 18px;
        text-align: center;
        margin-bottom: 40px;
      }
      .content-wrapper {
        width: 100%;
        height: auto;
        .link-wrapper {
          width: 200px;
          height: 35px;
          display: flex;
          position: relative;
          align-items: center;
          margin: 0 auto 22px;
          border-radius: 36px;
          border: solid 1px #7d7d7d;
          color: #333333;
          .text {
            position: absolute;
            left: 30px;
          }
          .icon {
            position: absolute;
            right: 30px;
            box-sizing: border-box;
            padding-top: 4px;
            font-size: 20px;
          }
          &:active {
            background-color: #73befb;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
}
</style>