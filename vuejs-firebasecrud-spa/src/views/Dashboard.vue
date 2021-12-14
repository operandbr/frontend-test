<template>
  <div class="dashboard">
    <h1>{{ userProfile.name }}</h1>
    <UserForm @user:added="addUser" />
    <v-row>
      <v-col md="4" v-for="(user, index) in users" :key="user.id">
        <v-card>
          <v-card-title>{{ user.name }} </v-card-title>
          <v-card-text>{{ user.email }} </v-card-text>
          <v-card-actions>
            <UserForm :user="user" :index="index" @user:updated="updateUser" />
            <v-btn color="red" @click="deleteConfirm(user.entry_id, user.name)"
              >Excluir</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-dialog v-model="deleteDialog" max-width="400">
          <v-card>
            <v-card-title class="headline"> Apagar Usuario? </v-card-title>
            <v-card-text
              >Tem certeza que deseja excluir <b> {{ pName }} </b>?</v-card-text
            >
            <v-card-actions>
              <v-btn text color="red" @click="deleteUser">Apagar</v-btn>
              <v-btn @click="deleteDialog = false" text color="secondary"
                >Fechar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserForm from '@/components/UserForm'
import { auth, db, storage, usersCollection } from '../firebase'
import { getDocs, doc, deleteDoc } from 'firebase/firestore'

export default {
  components: {
    UserForm
  },

  data() {
    return {
      users: [],
      pId: null,
      pName: null,
      deleteDialog: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    async addUser(doc) {
      this.users.push({
        name: doc.name,
        email: doc.email
      })
    },

    async updateUser(doc) {
      this.users.splice(doc.index, 1, {
        id: doc.id,
        name: doc.name,
        email: doc.email
      })
    },

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
    },

    async deleteConfirm(entry_id, name) {
      this.deleteDialog = true
      this.pId = entry_id
      this.pName = name

      console.log(this.pId)
    },

    async deleteUser() {
      try {
        console.log(this.pId)
        const userDoc = doc(db, 'users', this.pId)
        await deleteDoc(userDoc)

        alert('Usuario excluido!')

        this.users.splice(
          this.users.findIndex((x) => x.entry_id == this.pId),
          1
        )
        this.deleteDialog = false

        this.pId = null
        this.pName = null
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
