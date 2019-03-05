<template>
  <div class="ViewBase" id="app">
    <HeaderMenu v-if="isAuthenticated" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import Vue from 'vue'

export default Vue.extend({
  components: { HeaderMenu },
  computed: {
    isAuthenticated(): boolean {
      return this.$store.getters.isAuthenticated;
    },
  }
})
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
