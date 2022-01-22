<template>
  <v-container grid-list-xs>
    <v-row justify="center">
      <v-col align="center">
        <v-dialog v-model="registerDialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn fab v-bind="attrs" v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-toolbar>
              <v-spacer />
              <v-toolbar-title>Novo Cadastro</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-container class="py-5">
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="newData.name"
                  label="Nome"
                  :rules="[rules.required, rules.counter]"
                  @keyup.enter="checkAndRegister()"
                >
                  <template #prepend>
                    <v-icon>mdi-badge-account-horizontal</v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-text-field
                  v-model="newData.email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                  @keyup.enter="checkAndRegister()"
                >
                  <template #prepend>
                    <v-icon>mdi-email</v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-text-field
                  v-model="newData.password"
                  label="Senha"
                  :type="passwordType"
                  :rules="[rules.required]"
                  @keyup.enter="checkAndRegister()"
                >
                  <template #prepend>
                    <v-icon>mdi-key</v-icon>
                  </template>
                  <template #append>
                    <v-icon @click="setPasswordType()">
                      {{ passwordIcon }}
                    </v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-text-field
                  v-model="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  :rules="[rules.required, rules.matchingPassword]"
                  @keyup.enter="checkAndRegister()"
                >
                  <template #prepend>
                    <v-icon>mdi-lastpass</v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-row v-if="registerError" justify="center">
                  <v-col cols="9">
                    <v-alert outlined type="error">
                      {{ registerError }}
                    </v-alert>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-toolbar>
              <v-toolbar-items>
                <v-btn text @click="registerDialog = false">Cancelar</v-btn>
              </v-toolbar-items>
              <v-spacer />
              <v-toolbar-items>
                <v-btn text @click="checkAndRegister()">Cadastrar</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      registerDialog: false,

      newData: {
        name: '',
        email: '',
        password: '',
      },

      registerError: null,

      passwordConfirmation: null,

      passwordMatches: false,
      isEmailValid: false,

      passwordType: 'password',
      passwordIcon: 'mdi-eye-off',

      rules: {
        required: (value) => !!value || 'Obrigatório.',
        counter: (value) => value.length <= 10 || 'Máximo de 10 dígitos.',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email inválido.'
        },
        matchingPassword: (value) =>
          value === this.newData.password ||
          'Confirmação de senha não confere.',
      },
    }
  },
  computed: {
    ...mapState('User', ['data']),
  },
  watch: {
    registerDialog() {
      if (this.registerDialog === false) {
        this.$refs.form.resetValidation()
        this.newData = {
          name: '',
          email: '',
          password: '',
        }
      }
    },
    passwordConfirmation() {
      if (this.rules.matchingPassword(this.passwordConfirmation) === true) {
        this.passwordMatches = true
      } else {
        this.passwordMatches = false
      }
    },
    'newData.email'() {
      this.newData.email = this.newData.email.toLowerCase()
      if (this.rules.email(this.newData.email) === true) {
        this.isEmailValid = true
      } else {
        this.isEmailValid = false
      }
    },
  },
  methods: {
    ...mapActions('User', ['registerUser']),
    checkAndRegister() {
      if (this.passwordMatches && this.isEmailValid) {
        this.registerError = ''
        this.register(this.newData)
        this.registerDialog = false
      } else {
        this.registerError =
          'Email inválido ou confirmação de senha não confere.'
      }
    },
    setPasswordType() {
      switch (this.passwordType) {
        case 'password':
          this.passwordType = 'text'
          this.passwordIcon = 'mdi-eye'
          break
        case 'text':
          this.passwordType = 'password'
          this.passwordIcon = 'mdi-eye-off'
          break
        default:
          this.passwordType = 'password'
          this.passwordIcon = 'mdi-eye-off'
          break
      }
    },
  },
}
</script>
