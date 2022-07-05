<template>
  <div id="save-page">
    <div class="row">
        <div class="col-4">
          <router-link to="/lista"  class="btn btn-primary">
              Voltar
            </router-link>
        </div>
        <div class="col-8">
          <h3>Cadastre um novo usuário</h3>
        </div>
    </div>
    <div class="row mt-4 mb-4">
      <div class="col-12">
        <form @submit="handleSubmit">
          <div class="form-group mb-4">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" placeholder="Nome completo" id="nome" v-model="form.nome" />
          </div>
          <div class="form-group mb-4">
            <label for="idade">Idade</label>
            <input type="tel" class="form-control" placeholder="Nome completo" id="idade" v-model="form.idade" />
          </div>
          <button type="submit"  class="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'save',
  data() {
    return {
      form: {},
    };
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();

      console.log(this.form);
      console.log(this.$store);
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
