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
          // if (window.screen.width <= 414) {
            if (_isMobile()) {
              if (_this.phone_type != "mobile") {
                _this.$store.commit("SET_PHONE_TYPE", "mobile");
                _this._ifIsMobile();
                return;
              }
              return;
            } else {
              if (_this.phone_type != "pc") {
                console.log(1)
                _this.$store.commit("SET_PHONE_TYPE", "pc");
                _this._ifIsMobile();
                return;
              }
              return;
            }
          // }
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

