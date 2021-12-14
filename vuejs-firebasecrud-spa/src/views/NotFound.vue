<template>
  <div class="error-404-container">
    <div class="not-found">
      <h1>404</h1>
      <router-link to="/login"
        >Clique aqui para voltar para o LOGIN</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
}

.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  background-color: white;
  color: #241dbe;
}

.not-found h1 {
  font-size: 192px;
}

a {
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

a:hover {
  color: cyan;
  transition: all 0.5s;
}
</style>
