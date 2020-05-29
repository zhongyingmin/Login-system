<template>
  <div class="pages"></div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {

  },
  methods: {
    _ifIsMobile() {
      if (_isMobile() !== this.isMobile) {
          this.$store.commit("SET_PHONE_TYPE", isMobile);
        if (this.isMobile) {
          console.log("mobile");
          this.$router.replace("/mobile");
        } else {
          console.log("pc");
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