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
      isMobile: ""
    };
  },
  computed: {
    aDouble: () => {
      if (this.isMobile) {
        console.log("mobile");
        this.$router.push("/mobile");
      } else {
        console.log("pc");
        this.$router.push("/pc");
      }
    }
  },
  created() {
    console.log(_isMobile());
    this.isMobile = _isMobile();
  },
  mounted() {}
};
</script>

