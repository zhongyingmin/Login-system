<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: null
    };
  },
  created() {
    this.$nextTick(() => {
      window.onresize = () => {
        return (() => {
          console.log(window.innerWidth)
          if(window.innerWidth){

          }
          this._ifIsMobile();
        })();
      };
    });
  },
  methods: {
    _ifIsMobile() {
      this.$router.push("/")
    }
  }
};
</script>

