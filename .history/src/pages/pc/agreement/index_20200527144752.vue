<template>
  <div class="agreement-wrapper">
    <div class="main-wrapper">
      <div class="nav-bar">
        <div class="text-wrapper slider">用户协议</div>
        <div class="text-wrapper slider">隐私政策</div>
      </div>
      <div class="view_wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tabPosition: "left"
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
.agreement-wrapper {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
</style>