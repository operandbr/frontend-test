<template>
  <v-row justify="center">
    <v-col md="4">
      <v-card elevation="2">
        <v-card-title>Entrar</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              outlined
              required
            >
            </v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Senha"
              outlined
              required
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            >
            </v-text-field>

            <v-btn elevation="2" color="primary" @click="login"> Entrar </v-btn>
          </v-form>
        </v-card-text>

        <p class="pt-2">
          Ainda não possui uma conta?
          <router-link :to="{ name: 'Register' }">Registre Agora</router-link>
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      show: false,
      valid: false,
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'Email é obrigatorio',
        (v) => /.+@.+/.test(v) || 'Email é invalido'
      ],
      passwordRules: [
        (v) => !!v || 'Senha é obrigatorio',
        (v) => v.length >= 8 || 'A Senha precisa ter 8 ou mais caracteres'
      ]
    }
  },
  methods: {
    login() {
      const valid = this.$refs.form.validate()

      if (valid) {
        this.isLoading = true

        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
      }
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.isAuthenticated
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/dashboard')
    }
  }
}
</script>
