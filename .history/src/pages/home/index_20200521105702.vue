<template>
  <div class="home-wrapper">
    <div class="home app-main"></div>
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
.home-wrapper {
  width: 100%;
  height: 100%;
  //pc
  @media only screen and (min-width: 1024px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: url("../../../static/image/pc/bg.png") no-repeat;
      background-size: auto;
    }
  }
  //移动
  @media only screen and (max-width: 1024px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: none;
      &::after{
        content: '';
        position:fixed;
        width: 100%;
        height: 300px;
        background:  url("../../../static/image/mobile/bg.png") no-repeat;
        background-size:cover;
      }
    }
  }
}
</style>