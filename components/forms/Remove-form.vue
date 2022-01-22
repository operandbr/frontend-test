<template>
  <v-dialog v-model="removeDialog" width="500">
    <template #activator="{ on, attrs }">
      <v-btn text color="red" v-bind="attrs" v-on="on">Remover</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-form ref="form" lazy-validation>
          <h2 class="red--text">Tem certeza que deseja remover o usuário?</h2>
          <small class="red--text"
            >Digite "{{ rowData.name }}" para remover o usuário.</small
          >
          <v-text-field v-model="removeConfirm" error dense hide-details />
        </v-form>
      </v-container>
      <v-toolbar>
        <v-toolbar-items>
          <v-btn text @click="removeDialog = false">Cancelar</v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            text
            color="red"
            :disabled="removeConfirm != rowData.name"
            @click="removeUser(rowData.id), (editDialog = false)"
            >Remover</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </v-dialog>
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
      removeDialog: false,
      removeConfirm: null,
    }
  },
  watch: {
    removeDialog() {
      if (this.removeDialog === false) {
        this.$refs.form.resetValidation()
      }
    },
  },
  methods: {
    ...mapActions('User', ['removeUser']),
  },
}
</script>
