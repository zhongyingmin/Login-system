<template>
  <div class="home-wrapper">
    <div class="home app-main">
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
@import "../../../styles/global";
.home-wrapper {
  width: 100%;
  height: 100%;
  // position: fixed;
  overflow: hidden;
  //pc
  @media only screen and (min-width: 414px) {
    .app-main {
      width: 100%;
      height: 100%;
      background: url("../../../../static/image/pc/bg.png") no-repeat;
      background-size: auto;
    }
  }
}
</style>