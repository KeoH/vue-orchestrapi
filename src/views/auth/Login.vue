<template>
  <div class="Wrapper">
    <div class="Login-Header">
      <h1>Orchestra Pi</h1>
    </div>
    <div class="Login-Content">
      <div class="error" v-if="submitStatus=='ERROR'">Error enviando el formulario</div>
      <div class="error" v-if="submitStatus=='FORBIDDEN'">Usuario no válido</div>
      <form action @submit.prevent="loginSubmit">
        <div class="form-group">
          <div class="form-control" :class="{ 'form-group--error': $v.username.$error }">
            <input type="text" v-model.trim="$v.username.$model" placeholder="Username">
            <div class="error-field-wrapper" v-if="$v.username.$dirty">
              <div
                class="error-field"
                v-if="!$v.username.required"
              >El nombre de usuario es requerido.</div>
            </div>
          </div>
          <div class="form-control" :class="{ 'form-group--error': $v.password.$error }">
            <input type="password" v-model.trim="$v.password.$model" placeholder="Password">
            <div class="error-field-wrapper" v-if="$v.password.$dirty">
              <div class="error-field" v-if="!$v.password.required">La contraseña es requerida.</div>
            </div>
          </div>
        </div>
        <button class="btn" :disabled="$v.$invalid">
          <span v-if="submitStatus=='PENDING'">Ic</span>
          <span v-else>Entrar</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { required } from "vuelidate/lib/validators";

export default Vue.extend({
  data() {
    return {
      username: "",
      password: "",
      submitStatus: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    loginSubmit() {
      this.submitStatus = "";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.$http
          .post("http://localhost:8000/api/auth/token-auth/", {
            username: this.username,
            password: this.password
          })
          .then(
            response => {
              this.submitStatus = "Ok";
              this.$store.commit("authenticate", response.body);
              this.$router.push({ name: "home" });
            },
            error => {
              this.submitStatus = "FORBIDDEN";
              console.warn(error);
            }
          );
      }
    }
  }
});
</script>


<style lang="scss">

</style>
