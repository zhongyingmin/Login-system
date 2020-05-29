<template>
  <div class="mobile">
      <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
    phone_type(){
      return this.$store.state.app.phone_type
    }
  },
  methods: {},
  created() {
    console.log(this.phone_type!='mobile')
    if(this.phone_type!='mobile'){
      this.$router.push('/')
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mobile{
    width: 100%;
    height: 100%;
}
</style>