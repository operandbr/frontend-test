<template>
  <div id="app" class="container-fluid">
    <v-header />
    <router-view class="container"/>
    <v-footer />
  </div>
</template>

<script>
import Footer from './components/footer.component';
import Header from './components/header.component';

export default {
  name: 'Operand',

  components: {
    'v-header': Header,
    'v-footer': Footer,
  },

};
</script>


<style lang="scss">
@import '@/css/app.scss';
</style>
