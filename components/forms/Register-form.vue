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
              <v-text-field
                v-model="newData.name"
                label="Nome"
                :rules="[rules.required, rules.counter]"
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
            </v-container>
            <v-toolbar>
              <v-toolbar-items>
                <v-btn text @click="registerDialog = false">Cancelar</v-btn>
              </v-toolbar-items>
              <v-spacer />
              <v-toolbar-items>
                <v-btn
                  text
                  @click="registerUser(newData), (registerDialog = false)"
                  >Cadastrar</v-btn
                >
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
      },
    }
  },
  computed: {
    ...mapState('User', ['data']),
  },
  watch: {
    'newData.email'() {
      this.newData.email = this.newData.email.toLowerCase()
    },
  },
  methods: {
    ...mapActions('User', ['registerUser']),
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
