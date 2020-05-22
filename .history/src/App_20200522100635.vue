<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  name: 'App',
  mounted() {
    if (_isMobile()) {
      alert("手机端");
      this.$route.push('/mobile')
    } else {
      alert("pc端");
    }
  }
}
</script>

