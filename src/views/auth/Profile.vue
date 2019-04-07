<template>
  <div class="content">
    <h3>This is an profile page</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderMenu from '@/components/HeaderMenu.vue';

@Component({
  components: { HeaderMenu },
})
export default class Profile extends Vue {}
</script>

<style lang="scss">

</style>