<template>
  <v-container grid-list-xs>
    <user-table />
    <register-form />
  </v-container>
</template>

<script>
import UserTable from '../components/User-table.vue'
import RegisterForm from '../components/forms/Register-form.vue'
export default {
  name: 'IndexPage',
  components: { UserTable, RegisterForm },
}
</script>
