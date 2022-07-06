<template>
  <main id="lista-page">

      <div class="row mb-4 mt-4">
        <div class="col-12 col-md-8">
          <h3>Revise todos os Usuários Cadastrados</h3>
        </div>
        <div class="col-12 col-md-4">
          <router-link to="/novo" class="btn btn-info btn-sm ">Novo Usuário</router-link>
        </div>
      </div>

      <section>

        <table class="table table-sm">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>
                {{
                  usuario.nome
                }}
              </td>
              <td>
                <router-link :to="`/editar/${usuario.id}`" class="btn btn-info btn-sm ">
                Editar</router-link>
                <router-link :to="`/detalhe/${usuario.id}`" class="btn btn-info btn-sm ">
                Detalhes</router-link>
                <button @click="handleRemove(usuario.id)" class="btn btn-info btn-sm ">
                Remover</button>
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
      const usuarios = await this.$store.dispatch('usuario/getAll');

      this.usuarios = usuarios;
    },
    handleRemove(id) {
      this.$store.dispatch('usuario/remove', id);
      this.handleLoad();
    },
  },

};

</script>
