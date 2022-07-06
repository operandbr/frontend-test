<template>
  <main id="lista-page">
    <div class="card mb-4 mt-4">
      <div class="card-body">
        <section class="row mb-4 mt-4">
          <div class="col-12 col-md-8">
            <h3>Revise todos os Usuários Cadastrados</h3>
          </div>
          <div class="col-12 col-md-4 text-end">
            <router-link to="/novo" class="btn btn-primary btn-sm"
              >Novo Usuário</router-link
            >
          </div>
        </section>

        <section>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Usuário</th>
                <th style="width: 40%" class="text-end">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(usuario, index) in usuarios" :key="index">
                <td class="align-middle">
                  {{ usuario.nome }}

                </td>
                <td>
                  <div class="d-flex justify-content-end">
                    <router-link
                      :to="`/detalhe/${usuario.id}`"
                      class="btn btn-primary btn-sm d-inline-flex me-4"
                    >
                      <span class="material-icons me-2"> open_in_new </span>
                      Detalhes
                    </router-link>
                    <button
                      @click="handleRemove(usuario.id)"
                      class="btn btn-danger btn-sm d-inline-flex"
                    >
                      <span class="material-icons">delete_forever</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
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
    async handleRemove(id) {
      const value = await this.$swal({
        title: 'Excluir',
        icon: 'warning',
        html: `
         Tem certeza que deseja remover esse usuário
        `,
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      });

      if (!value.isConfirmed) {
        return;
      }

      const loader = this.$loading.show();
      try {
        this.$store.dispatch('usuario/remove', id);
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
