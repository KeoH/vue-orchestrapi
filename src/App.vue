<template>
<div>
  <HeaderMenu></HeaderMenu>
  <el-container>
      <el-main>
        <router-view/>
      </el-main>
  </el-container>
</div>
</template>

<script lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue";
import Vue from "vue";

export default Vue.extend({
  components: { HeaderMenu },
  data() {
    return {
      active: false
    };
  },
  methods: {
    logOutClick() {
      this.active = false;
      this.$router.push("/auth/logout");
    }
  },
  computed: {
    isAuthenticated(): boolean {
      return this.$store.getters.isAuthenticated;
    }
  }
});
</script>
<style lang="scss">
  a{
    text-decoration: none;
    color: "#fff";
  }
  .router-link-exact-active.router-link-active{
      color:"#ffd04b" !important;
  }
</style>