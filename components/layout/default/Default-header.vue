<template>
  <div>
    <v-app-bar>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        hide-details
        prepend-icon="mdi-white-balance-sunny"
        append-icon="mdi-moon-waning-crescent"
      ></v-switch>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      rightDrawer: false,
      title: 'User CRUD',
    }
  },
}
</script>
