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
    if (this._isMobile()) {
      alert("手机端");
    } else {
      alert("pc端");
    }
  }
}
</script>

