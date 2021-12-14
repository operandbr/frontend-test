<template>
  <div class="home">
    <h1>Usuarios Recentes</h1>
    <p v-if="users.length == 0">Sem usuarios cadastrados</p>
    <v-row>
      <v-col md="4" v-for="user in users" :key="user.entry_id">
        <v-card>
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-text>
            <p class="body-1">Email: {{ user.email }}</p>

            <!-- <v-btn block color="primary">Saiba Mais</v-btn> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { usersCollection } from '../firebase'
import { getDocs } from 'firebase/firestore'

export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },

  methods: {
    async getUsers() {
      try {
        const data = await getDocs(usersCollection)
        this.users = data.docs.map((doc) => ({
          ...doc.data(),
          entry_id: doc.id
        }))

        console.log(this.users)
      } catch (e) {
        console.log(e)
      }
    }
  },

  async mounted() {
    await this.getUsers()
  }
}
</script>
