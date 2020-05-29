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
    isMobile(){
      return this.$store.state.app.phone_type
    }
  },
  methods: {
    _ifIsMobile() {
      if(!this.isMobile||this.$route.query.resize){
        if (_isMobile()) {
          console.log("mobile");
          this.$store.commit("SET_PHONE_TYPE",'mobile');
          this.$router.replace("/mobile");
        } else {
          console.log("pc");
          this.$store.commit("SET_PHONE_TYPE",'pc');
          this.$router.replace("/pc");
        }
      }else{
        console.log(this.isMobile)
        this.$router.push(`/${this.isMobile}`);
      }
      // if (_isMobile() !== this.isMobile) {
      //     this.$store.commit("SET_PHONE_TYPE", isMobile);
      //   if (this.isMobile) {
      //     console.log("mobile");
      //     this.$router.replace("/mobile");
      //   } else {
      //     console.log("pc");
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