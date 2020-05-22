<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  name: "App",
  data() {
    return {
      isMobile: false
    };
  },
  created() {
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          this.isMobile=_isMobile()
          console.log(this.isMobile)
        })();
      };
    });
  },
  mounted() {}
};
</script>

