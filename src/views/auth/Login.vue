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
        // do your submit logic here
        this.$store.commit('authenticate', {username: this.username, password: this.password} );
        let user = this.$store.getters.getUser;
        if (user != null) {
          this.submitStatus = "Ok";
          this.$router.push({name:'home'});
        } else {
          this.submitStatus = "FORBIDDEN";
        }
      }
    }
  }
});
</script>


<style lang="scss">
.Wrapper {
  margin-top: -10vh;
  width: 400px;
  min-height: 270px;
  display: inline-block;
  padding: 0.5em 2em;
  background-color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 10px 12px 30px rgb(47, 47, 47);
}
.Login-Content {
  padding-top: 1em;

  input {
    width: 100%;
    padding: 0.5em;
    text-align: center;
    box-sizing: border-box;
    font-size: 1em;
    border-radius: 10px;
    border: 1px solid gray;

    &:hover {
      background-color: lightgray;
    }

    &[type="password"] {
      margin-top: 0.5em;
    }
  }
}
.form-group {
  margin-bottom: 2em;
}
.btn {
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: lightgray;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  &:disabled {
    background-color: whitesmoke;
  }
}
.error {
  padding: 0.5em;
  background-color: rgba(230, 0, 0, 0.25);
  border: 1px solid rgba(230, 0, 0, 0.5);
  border-radius: 10px;
  margin: 0.25em 0;
}
.error-field {
  color: rgba(230, 0, 0, 0.5);
}
</style>
