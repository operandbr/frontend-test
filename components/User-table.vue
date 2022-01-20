<template>
  <v-data-table :headers="headers" :items="users" item-key="id">
    <template #[`item.update`]="{ item }">
      <update-form :row-data="item" />
    </template>
    <template #[`item.delete`]="{ item }">
      <delete-form :row-data="item" />
    </template>
  </v-data-table>
</template>

<script>
import UpdateForm from '../components/forms/Update-form.vue'
import DeleteForm from '../components/forms/Delete-form.vue'
export default {
  components: { UpdateForm, DeleteForm },
  data() {
    return {
      users: [
        {
          id: 0,
          name: 'Teste',
          email: 'teste@teste.com.br',
          password: 'teste123',
          created_at: '2022-01-20',
          updated_at: '2022-01-20',
        },
        {
          id: 1,
          name: 'João',
          email: 'joao@teste.com.br',
          password: 'teste432',
          created_at: '2022-01-20',
          updated_at: '2022-01-20',
        },
      ],
    }
  },
  computed: {
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
  },
}
</script>
