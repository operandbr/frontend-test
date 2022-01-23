<template>
  <v-container grid-list-xs>
    <user-table />
    <register-form />
    <v-row v-if="error" justify="center">
      <v-col cols="4">
        <v-alert outlined type="error">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import UserTable from '../components/User-table.vue'
import RegisterForm from '../components/forms/Register-form.vue'
export default {
  name: 'IndexPage',
  components: { UserTable, RegisterForm },
  computed: {
    ...mapState('User', ['error']),
  },
}
</script>
