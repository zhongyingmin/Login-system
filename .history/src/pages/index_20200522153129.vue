<template>
  <div class="pages"></div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  watch: {},
  computed: {
    phone_type() {
      return this.$store.state.app.phone_type;
    }
  },
  methods: {
    _ifIsMobile() {
      
          if (_isMobile()) {
            if (_this.phone_type != "mobile") {
              _this.$store.commit("SET_PHONE_TYPE", "mobile");
            }
          } else {
            if (_this.phone_type != "pc") {
              _this.$store.commit("SET_PHONE_TYPE", "pc");
            }
          }
          this.$router.push(`/${this.phone_type}`)
      // if (this.phone_type) {
      //   this.$router.push(`/${this.phone_type}`)
      // } else {
      //   if (_isMobile()) {
      //     // console.log("mobile");
      //     this.$store.commit("SET_PHONE_TYPE", "mobile");
      //     this.$router.replace("/mobile");
      //   } else {
      //     // console.log("pc");
      //     this.$store.commit("SET_PHONE_TYPE", "pc");
      //     this.$router.replace("/pc");
      //   }
      // }
    }
  },
  created() {
    this.$nextTick(() => {
      this._ifIsMobile();
    });
  }
};
</script>