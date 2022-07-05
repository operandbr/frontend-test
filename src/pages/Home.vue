<template>
  <div id="home-page">
    <v-header />
      <section class="row">

      </section>
    <v-footer />
  </div>
</template>

<script>

import Footer from '../components/footer.component';
import Header from '../components/header.component';


export default {
  name: 'Home',
  components: {
    'v-header': Header,
    'v-footer': Footer,
  },
};
</script>


<style lang="scss" scoped>
</style>
