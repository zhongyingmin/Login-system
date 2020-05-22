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
      isMobile:''
    };
  },
  computed: {
    aDouble: vm => vm.a * 2
  },
  created(){
    console.log(_isMobile())
    this.isMobile=_isMobile();
  },
  mounted() {
    if (_isMobile()) {
      console.log("mobile");
      this.$router.push("/mobile");
    } else {
      console.log("pc");
      this.$router.push("/pc");
    }
  }
};
</script>

