<template>
  <main id="lista-page">

      <div class="row mb-4 mt-4">
        <div class="col-12 col-md-8">
          <h3>Revise todos os Usuários Cadastrados</h3>
        </div>
        <div class="col-12 col-md-4">
          <router-link to="/novo" class="btn btn-primary w-100">Novo Usuário</router-link>
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
                  usuario
                }}
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

};

</script>
