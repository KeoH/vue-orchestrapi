<template>
  <div>
    <h3>Dashboard</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderMenu from '@/components/HeaderMenu.vue';

@Component({
  components: { HeaderMenu },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>
