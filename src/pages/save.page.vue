<template>
  <div id="save-page">
    <div class="row">
      <div class="col-4">
        <router-link to="/lista" class="btn btn-primary"> Voltar </router-link>
      </div>
      <div class="col-8">
        <h3>Cadastre um novo usuário</h3>
      </div>
    </div>
    <div class="row mt-4 mb-4">
      <div class="col-12">
        <form @submit.prevent="handleSubmit">
          <div class="form-group mb-4">
            <label for="nome">Nome</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nome completo"
              id="nome"
              v-model="form.nome"
            />
          </div>
          <div class="form-group mb-4">
            <label for="idade">Idade</label>
            <input
              type="tel"
              class="form-control"
              placeholder="12"
              id="idade"
              v-mask="'##'"
              v-model="form.idade"
            />
          </div>
          <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
      </div>
    </div>
    <div class="row mt-4 mb-4">
      <div class="col-12">
        <pre>
        {{
          form
        }}
        </pre>
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

  async created() {
    const { id } = this.$route.params;
    if (id) {
      const usuario = await this.$store.dispatch('usuario/findById', id);
      this.form = usuario;
    }
  },
  methods: {
    async handleSubmit() {
      const loader = this.$loading.show();
      try {
        await this.$store.dispatch('usuario/save', this.form);
        this.$swal('Usuário salvo com sucesso.');
      } catch (error) {
        this.$swal('Houve um problema ao salvar esse usuário.');
      } finally {
        loader.hide();
      }
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
