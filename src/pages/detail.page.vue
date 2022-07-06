<template>
  <main class="detalhe-page">
    <div class="card mb-4 mt-4">
      <div class="card-body">

        <section class="row mb-4 mt-4">

          <div class="col-4">
            <router-link to="/lista" class="btn btn-primary">
              Voltar
            </router-link>
          </div>

          <div class="col-6 text-end">
            <h3>{{ usuario.nome }}</h3>
          </div>

          <div class="col-2 text-end">
            <router-link :to="`/editar/${usuario.id}`" class="btn btn-primary btn-sm d-inline-flex">
              <span class="material-icons me-2"> mode_edit </span>
              Editar
            </router-link>
          </div>

        </section>

        <section class="row mb-4">
          <div class="col-12">Informações completas do usuário</div>
        </section>

        <section class="row mb-4">
          <div class="col-12">
            <ul>
              <li>Idade: {{ usuario.idade }}</li>
              <li>Celular: {{ usuario.celular }}</li>
            </ul>
          </div>
        </section>

      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'detalhes',
  data() {
    return {
      usuario: {},
    };
  },
  async created() {
    const { id } = this.$route.params;
    if (id) {
      const usuario = await this.$store.dispatch('usuario/findById', id);
      this.usuario = usuario;
    }
  },
};
</script>
