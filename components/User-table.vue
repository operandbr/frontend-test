<template>
<div>
  <v-data-table v-if="users" :headers="headers" :items="users" item-key="id">
    <template #[`item.update`]="{ item }">
      <update-form :row-data="item" />
    </template>
    <template #[`item.delete`]="{ item }">
      <remove-form :row-data="item" />
    </template>
    </span>
  </v-data-table>
  <v-data-table v-else :headers="emptyHeader" :items="alert" item-key="text">
     <template #[`item.alert`]="{ item }">
      <v-alert style="margin-top: 15px" icon="mdi-alert" dense prominent outlined type="primary" :value="true">
        {{item.text}}
      </v-alert>
    </template>
    </v-data-table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UpdateForm from '../components/forms/Update-form.vue'
import RemoveForm from '../components/forms/Remove-form.vue'
export default {
  components: { UpdateForm, RemoveForm },
  data() {
    return {
      alert: [
        {
          text: "Nenhum usuário cadastrado!"
        }
      ]
    }
  },
  computed: {
    ...mapState('User', ['users']),
    headers() {
      return [
        {
          text: 'Nome de Usuário',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Data do Cadastro',
          value: 'created_at',
        },
        {
          text: 'Última Atualização',
          value: 'updated_at',
        },
        {
          value: 'update',
          sortable: false,
        },
        {
          value: 'delete',
          sortable: false,
        },
      ]
    },
    emptyHeader() {
      return [
        {
          value: 'alert',
          sortable: false,
        }
      ]
    }
  },
  mounted() {
    this.getUsers()
  },
  unmounted() {
    this.clearUsers()
  },
  methods: {
    ...mapActions('User', ['getUsers', 'clearUsers']),
  },
}
</script>
