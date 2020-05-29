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
        if (this.phone_type != "mobile") {
          this.$store.commit("SET_PHONE_TYPE", "mobile");
        }
      } else {
        if (this.phone_type != "pc") {
          this.$store.commit("SET_PHONE_TYPE", "pc");
        }
      }
      this.$router.replace(`/${this.phone_type}`);
    }
  },
  created() {
    this.$nextTick(() => {
      this._ifIsMobile();
    });
  }
};
</script>