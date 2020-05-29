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
    let _this = this;
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          if (_isMobile()) {
            if (_this.phone_type != "mobile") {
              _this.$store.commit("SET_PHONE_TYPE", "mobile");
              _this._ifIsMobile();
            }
            return;
          } else {
            if (_this.phone_type != "pc") {
              _this.$store.commit("SET_PHONE_TYPE", "pc");
              _this._ifIsMobile();
            }
            return;
          }
        })();
      };
    });
  },
  methods: {
    _ifIsMobile() {
      this.$router.push("/");
    }
  }
};
</script>

