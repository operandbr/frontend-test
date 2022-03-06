<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="crud" href="/">USERCRUD</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Users</b-nav-item>
          <b-nav-item to="/signup">Signup</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.crud {
  font-family: "Lato", sans-serif;
  color: #7a72ff !important;
  font-style: italic;
}
nav {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0px 2px 4px rgba(30, 60, 90, 0.1);
  text-decoration: none;
}

a {
  list-style: none;
  text-decoration: none;
  margin-left: 15px;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: black;
}
</style>
