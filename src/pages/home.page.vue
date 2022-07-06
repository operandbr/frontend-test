<template>
  <main id="home-page">
    <div class="card mb-4 mt-4">
      <div class="card-body">

        <div class="row mb-4 mt-4">
          <div class="col-12 d-flex justify-content-center">
              <figure class="bg-operand logo">
                <img src="@/assets/svg/operand.svg" alt="" />
              </figure>
          </div>
        </div>

        <div class="row mb-4 mt-4">
          <div class="col-12 text-center">Bem vindo ao Operand Front</div>
        </div>

        <div class="row  mb-4">
          <div class="col-12 text-center">
            <router-link to="/lista" class="btn btn-primary btn-sm">
              Acessar o ambiente
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>


<style lang="scss" scoped>
.logo {
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  img{
    width: 200px;
  }
}
</style>
