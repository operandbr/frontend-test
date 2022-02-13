<template>
  <div class="body">
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">FIREBASE CRUD</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Adicionar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Listar</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .body {
    background: #181818;
    width: 100vw;
    height: 100vh;
  }
  .nav-link {
    margin-left: 20px;
  }
</style>
