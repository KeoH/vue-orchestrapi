<template>
  <div class="ViewBase">
    <HeaderMenu />
    <div class="content">
      <h3>This is an profile page</h3>
    </div>
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
.Background{
    background-color: gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Wrapper{
    margin-top: -10vh;
    width: 400px;
    min-height: 270px;
    display: inline-block;
    padding: .5em 2em;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    box-shadow: 10px 12px 30px rgb(47, 47, 47);
}
.LoginBack{
    margin-top: 3em;
    a{
        text-decoration: none;
        color: black;
    }
}

.btn{
    padding: .5em 1em;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: lightgray;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
}
</style>