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
      console.log(1);
      if (this.phone_type) {
        this.router.push(`/${this.phone_type}`)
      } else {
        if (_isMobile()) {
          // console.log("mobile");
          this.$store.commit("SET_PHONE_TYPE", "mobile");
          this.$router.replace("/mobile");
        } else {
          // console.log("pc");
          this.$store.commit("SET_PHONE_TYPE", "pc");
          this.$router.replace("/pc");
        }
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this._ifIsMobile();
    });
  }
};
</script>