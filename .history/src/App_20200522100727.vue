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
      console.log('mobile')
      this.$router.push('/mobile')
    } else {
      alert("pc端");
    }
  }
}
</script>

