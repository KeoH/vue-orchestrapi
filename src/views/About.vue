<template>
  <div class="content">
    <h3>This is an about page</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderMenu from '@/components/HeaderMenu.vue';

@Component({
  components: { HeaderMenu },
})
export default class About extends Vue {}
</script>

<style lang="scss">
.ViewBase{
  display: flex;
  flex-direction: column;
}

</style>