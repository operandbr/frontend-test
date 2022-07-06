<template>
  <div class="detalhe-page">
    <div class="row">
      <div class="col-4">
        <router-link to="/lista" class="btn btn-primary"> Voltar </router-link>
      </div>
      <div class="col-8">
        <h3>Detalhes</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul>
          <li>Nome: {{usuario.nome}}</li>
          <li>Idade: {{usuario.idade}} </li>
        </ul>
      </div>
    </div>
  </div>
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
