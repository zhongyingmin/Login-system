<template>
  <div class="pc">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    phone_type() {
      return this.$store.state.app.phone_type;
    }
  },
  methods: {},
  created() {
    if(this.phone_type!='pc'){
      this.$router.push('/')
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pc {
  width: 100%;
  height: 100%;
}
</style>