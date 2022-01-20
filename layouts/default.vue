<template>
  <v-app dark>
    <default-header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <default-footer />
  </v-app>
</template>

<script>
import DefaultFooter from '../components/layout/default/Default-footer.vue'
import DefaultHeader from '../components/layout/default/Default-header.vue'
export default {
  name: 'DefaultLayout',
  components: { DefaultHeader, DefaultFooter },
}
</script>
