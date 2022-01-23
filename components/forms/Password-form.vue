<template>
  <v-container grid-list-xs>
    <v-row justify="center">
      <v-col align="center">
        <v-dialog v-model="passwordDialog" width="500">
          <template #activator="{ on, attrs }">
            <a v-bind="attrs" v-on="on"> Alterar senha </a>
          </template>
          <v-card>
            <v-toolbar>
              <v-spacer />
              <v-toolbar-title>Alterar Senha</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-container class="py-5">
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="$props.rowData.password"
                  label="Nova senha"
                  :type="passwordType"
                  :rules="[rules.required]"
                  @keyup.enter="checkAndUpdate()"
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
                  label="Confirmar senha"
                  type="password"
                  :rules="[rules.required, rules.matchingPassword]"
                  @keyup.enter="checkAndUpdate()"
                >
                  <template #prepend>
                    <v-icon>mdi-lastpass</v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-row v-if="passwordError" justify="center">
                  <v-col cols="9">
                    <v-alert outlined type="error">
                      {{ passwordError }}
                    </v-alert>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-toolbar>
              <v-toolbar-items>
                <v-btn text @click="passwordDialog = false">Cancelar</v-btn>
              </v-toolbar-items>
              <v-spacer />
              <v-toolbar-items>
                <v-btn text @click="checkAndUpdate(), (passwordDialog = false)"
                  >Alterar</v-btn
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
import { mapActions } from 'vuex'
export default {
  props: {
    rowData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      passwordDialog: false,

      newPassword: null,

      passwordError: null,

      passwordConfirmation: null,

      passwordMatches: false,

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
  watch: {
    passwordDialog() {
      if (this.passwordDialog === false) {
        this.$refs.form.resetValidation()
        this.$props.rowData = {
          name: '',
          email: '',
          password: '',
        }
        this.passwordConfirmation = null
      }
    },
  },
  methods: {
    ...mapActions('User', ['updatePassword']),
    checkAndUpdate() {
      if (this.passwordMatches) {
        this.passwordError = ''
        this.updatePassword(this.rowData)
        this.registerDialog = false
      } else {
        this.registerError = 'Confirmação de senha não confere.'
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
