<template>
  <v-dialog v-model="updateDialog" width="500">
    <template #activator="{ on, attrs }">
      <v-btn fab icon color="yellow darken-1" v-bind="attrs" v-on="on">
        <v-icon large>mdi-pencil</v-icon>
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
            v-model="$props.rowData.name"
            label="Nome"
            :rules="[rules.required, rules.counter]"
          >
            <template #prepend>
              <v-icon>mdi-badge-account-horizontal</v-icon>
            </template>
          </v-text-field>
          <br />
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
        </v-form>
        <password-form :row-data="rowData" />
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
</template>

<script>
import { mapActions } from 'vuex'
import PasswordForm from '@/components/forms/Password-form.vue'
export default {
  components: {
    PasswordForm,
  },
  props: {
    rowData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      updateDialog: false,

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
  },
}
</script>
