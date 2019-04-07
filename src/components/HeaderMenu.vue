<template>
  <header>
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Orchestra Pi</router-link>
      </el-menu-item>
      <el-menu-item index="2">Proyectos</el-menu-item>
      <el-menu-item index="3">Aplicaciones</el-menu-item>
      <el-menu-item index="4">Contenedores</el-menu-item>
      <el-menu-item index="5">Imágenes</el-menu-item>
      <el-menu-item index="6">Networks</el-menu-item>
      <el-menu-item index="7">
        <router-link to="/about">About</router-link>
      </el-menu-item>
      <el-submenu index="8">
        <template slot="title">Opciones</template>
        <router-link to="/profile">
          <el-menu-item index="8-1">Profile</el-menu-item>
        </router-link>
        <router-link to="/auth/logout">
          <el-menu-item index="8-2">Logout</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderMenu extends Vue {
  data() {
    return {
      activeItem: 0
    };
  }
}
</script>
<style lang="scss">
</style>
