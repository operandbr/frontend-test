<template>
  <div id="app">
    <header>
      <h2>User <span>Administration</span></h2>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <h4> © Todos os direitos reservados - <a href="https://github.com/joao-belmiro" target="_blank" rel="noopener noreferrer">GitHub</a> João Carlos - 2022</h4>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
}

header {
  width: 100%;
  background-color: $secondary;
  h2 {
    color: $grey;
    line-height: 100px;
    height: 100px;
    text-align: left;
    padding-left: 64px;
    letter-spacing: 3px;

    span {
        color: $contrast;
    }
    @media screen and (max-width: $small-screen) {
      padding: 16px;
    }
  }
}
main {
    padding: 32px 64px 48px;
    min-height: 100vh;
    background-color: $background;

    @media screen and (max-width: $small-screen) {
      padding: 16px;
    }
}

footer {
    height: 80px;
    line-height: 80px;
    background-color: $secondary;
    text-align: center;

    h4 {
        color: $grey;

        a {
            color: $success;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
      @media screen and (max-width: $small-screen) {
        font-size: 11px;
      }
    }
}
</style>
