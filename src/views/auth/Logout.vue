<template>
    <div class="Wrapper">
        <div class="Login-Header">
            <h1>Orchestra Pi</h1>
        </div>
        <div class="Login-Content">
            <p>Acabas de cerrar la sesión</p>
            <div class="LoginBack">
                <router-link class="btn" to="/auth/login">Login</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    mounted() {
        this.$store.commit('logout');
    }
})
</script>

<style lang="scss">

</style>