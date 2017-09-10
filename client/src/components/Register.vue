<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="pink accent-4" dark>
          <v-toolbar-title class="title">Registeration</v-toolbar-title>
        </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              light
              label="Email"
              v-model="email"
              hint="Format: name@email.com"
            >
            </v-text-field>
            <br>
            <v-text-field 
              light
              type="password"
              label="Password"
              v-model="password"
              hint="At least 8 characters"
            >
            </v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn
              dark
              class="pink accent-1"
              @click="register">Register</v-btn>
          </div>
          </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          password: this.password,
          email: this.email
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color:red;
  }
</style>
