<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  name: "App",
  data(){
    return {
      isMobile:null
    }
  },
  created() {
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          this.isMobile = _isMobile();
        if (this.isMobile) {
          console.log("mobile");
          this.$router.push("/mobile");
        } else {
          console.log("pc");
          this.$router.push("/pc");
        }
        })();
      };
    });
  }
};
</script>

