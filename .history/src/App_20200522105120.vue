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
      isMobile: null
    };
  },
  created() {
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          this._ifIsMobile()
        })();
      };
      this._ifIsMobile();
    });
  },
  methods: {
    _ifIsMobile() {
      console.log(_isMobile() !== this.isMobile);
      if (_isMobile() !== this.isMobile) {
        this.isMobile = _isMobile();
        if (this.isMobile) {
          console.log("mobile");
          this.$router.replace("/mobile");
        } else {
          console.log("pc");
          this.$router.replace("/pc");
        }
      }
    }
  }
};
</script>

