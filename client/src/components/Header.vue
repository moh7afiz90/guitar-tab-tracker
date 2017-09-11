<template>
  <v-toolbar fixed class="pink accent-4">
    <v-toolbar-title 
      class="mr-4">
        <v-btn flat dark to="/">
            GuitarTabTracker
        </v-btn>
      </v-toolbar-title>
   <!-- TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark to="login">
          Log In
        </v-btn>
        <v-btn flat dark to="register">
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
