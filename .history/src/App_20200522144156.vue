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
  computed: {
    phone_type() {
      return this.$store.state.app.phone_type;
    }
  },
  created() {
    let _this=this
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          if (_isMobile()) {
            if (_this.phone_type != "mobile") {
              _this._ifIsMobile();
            }
            return
          } else {
            if (_this.phone_type != "pc") {
              _this._ifIsMobile();
            }
            return
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

