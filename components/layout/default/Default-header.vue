<template>
  <div>
    <v-app-bar>
      <v-toolbar-title v-text="title" />
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
