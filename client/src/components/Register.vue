<template>
  <div>
    <h1>Register</h1>
    <input 
      type="email"
      name="email"
      v-model="email"
      placeholder="Email" />
    <br>
    <input 
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button @click="register">Register</button>

  </div>
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
          email: this.email,
          password: this.password
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
