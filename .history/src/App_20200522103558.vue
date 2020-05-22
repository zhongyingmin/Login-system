<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { _isMobile } from "@/utils/validate.js";
export default {
  name: "App",
  computed: {
    isMobile: {
      // getter
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function(newValue) {
        
      }
    }
  },
  created() {
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          this.isMobile = _isMobile();
        })();
      };
    });
  },
  mounted() {}
};
</script>

