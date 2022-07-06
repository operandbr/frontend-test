<template>
  <main id="home-page">
    <div class="row mb-4 mt-4">
        <div class="col-12">
            Bem vindo ao Opario
        </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-4">
        <router-link to="/lista"  class="btn btn-info btn-lg mr-3 semi">
          Acessar
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Home',
  components: {},
};
</script>


<style lang="scss" scoped>
</style>
