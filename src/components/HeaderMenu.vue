<template>
  <header class="Header">
    <div class="HeaderLogoWrapper">
      <img class="logo" src="@/assets/logo.svg" alt="logo icon">
      <h3>Orchestra Pi</h3>
    </div>
    <div class="HeaderMenuWrapper">
      <div class="MenuButtonWrapper"></div>
      <div class="HeaderMenu">
        <div class="HeaderMenu-Icon">
          <i class="fas fa-search"></i>
        </div>
        <div class="HeaderMenu-Icon">
          <i class="far fa-bell"></i>
        </div>
        <div class="HeaderMenu-Icon">
          <i class="far fa-envelope"></i>
        </div>
        <div class="HeaderMenu-Icon AvatarWrapper DropdownMenu">
            <img src="http://i.pravatar.cc/80?img=5" alt="">
            <ul class="Dropdown">
                <li class="Dropdown-Item">
                    <router-link to="/auth/logout">Logout</router-link></li>
            </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderMenu extends Vue {}
</script>

<style lang="scss">
.Header{
    display: flex;
    flex-direction: column;
    background-color: lightgray;
}
.HeaderLogoWrapper{
        text-align: center;
        justify-content: center;
        background-color: gray;

    h3{
        display: inline-block;
    }

}
.logo{
    width: 40px;
    margin-bottom: -15px;
}

.HeaderMenuWrapper{
    display: flex;
    justify-content: space-between;
}
.MenuButtonWrapper{
    flex-basis: 60px;
}
.HeaderMenu{
    flex:1;
    text-align: right;
    padding: .2em .8em .2em 1em;
}
.HeaderMenu-Icon{
    display: inline-block;
    font-size: 1.3em;
    padding: .3em;
    cursor: pointer;
    margin-right: .25em;
}
.AvatarWrapper{
    img{
        width: 40px;
        border-radius: 50%;
    }
    margin-left: .5em;
    font-size: 1em;
}
.DropdownMenu{
    position:relative;
        &:hover .Dropdown{
        display: block;
    }
}
.Dropdown{
    position: absolute;
    background:white;
    border: 1px solid gray;
    border-radius: 5px;
    display: none;
    right: 0;
    bottom: -35px;
    list-style: none;
    padding: 0;
    margin: 0;

}
.Dropdown-Item{
    padding: .5em 1em;
    a{
        text-decoration: none;
        color: black;
    }
    &:hover{
        background-color: gray;
        color: white;
    }
}


</style>
