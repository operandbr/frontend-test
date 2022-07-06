<template>
  <main id="lista-page">
    <div class="row mb-4 mt-4">
      <div class="col-12 col-md-8">
        <h3>Revise todos os Usuários Cadastrados</h3>
      </div>
      <div class="col-12 col-md-4">
        <router-link to="/novo" class="btn btn-info btn-sm"
          >Novo Usuário</router-link
        >
      </div>
    </div>

    <section>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Usuário</th>
            <th style="width: 40%">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td>
              {{ usuario.nome }}
            </td>
            <td>
              <div class="d-flex justify-content-evenly">


              <router-link
                :to="`/detalhe/${usuario.id}`"
                class="btn btn-primary btn-sm d-inline-flex"
              >
                <span class="material-icons me-2"> open_in_new </span>
                Detalhes
              </router-link>
              <button
                @click="handleRemove(usuario.id)"
                class="btn btn-danger btn-sm d-inline-flex"
              >
                <span class="material-icons me-2">delete_forever</span>
                Remover
              </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
export default {
  name: 'lista',
  data() {
    return {
      usuarios: [],
    };
  },
  async created() {
    this.handleLoad();
  },

  methods: {
    async handleLoad() {
      const loader = this.$loading.show();
      try {
        const usuarios = await this.$store.dispatch('usuario/getAll');
        this.usuarios = usuarios;
      } catch (error) {
        this.$swal('Não foi possível listar os usuários');
      } finally {
        loader.hide();
      }
    },
    handleRemove(id) {
      const loader = this.$loading.show();
      try {
        this.$store.dispatch('usuario/remove', id);
        this.$swal('usuário removido com sucesso');
        this.handleLoad();
      } catch (error) {
        this.$swal('Não foi possível remover o usuário');
      } finally {
        loader.hide();
      }
    },
  },
};
</script>
