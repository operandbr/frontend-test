<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-btn to="/" text>Operand</v-btn>
      <v-spacer></v-spacer>
      <div v-if="!isAuthenticated">
        <v-btn :to="{ name: 'Login' }" text>Entrar</v-btn>
        <v-btn :to="{ name: 'Register' }" text>Registrar</v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout" text>Logout</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',

  computed: {
    ...mapState(['isAuthenticated'])
  },

  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
