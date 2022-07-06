<template>
  <div class="detalhe-page">
    {{usuario}}
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
