<template>
  <div class="pages"></div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
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
  },
  created() {
    this._ifIsMobile();
  }
};
</script>