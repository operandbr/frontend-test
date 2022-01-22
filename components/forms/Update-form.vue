<template>
  <v-container grid-list-xs>
    <v-row justify="center">
      <v-col align="center">
        <v-dialog v-model="updateDialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn text color="yellow darken-1" v-bind="attrs" v-on="on">
              Editar
            </v-btn>
          </template>
          <v-card>
            <v-toolbar>
              <v-spacer />
              <v-toolbar-title>Atualizar Cadastro</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-container class="py-5">
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="$props.rowData.email"
                  label="Email"
                  :rules="[rules.required, rules.email]"
                >
                  <template #prepend>
                    <v-icon>mdi-email</v-icon>
                  </template>
                </v-text-field>
                <br />
                <v-text-field
                  v-model="$props.rowData.password"
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
              </v-form>
            </v-container>
            <v-toolbar>
              <v-toolbar-items>
                <v-btn text @click="updateDialog = false">Cancelar</v-btn>
              </v-toolbar-items>
              <v-spacer />
              <v-toolbar-items>
                <v-btn text @click="updateUser(rowData), (updateDialog = false)"
                  >Atualizar</v-btn
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
      updateDialog: false,

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
    updateDialog() {
      if (this.updateDialog === false) {
        this.$refs.form.resetValidation()
      }
    },
    'rowData.email'() {
      this.$props.rowData.email = this.rowData.email.toLowerCase()
    },
  },
  methods: {
    ...mapActions('User', ['updateUser']),
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
