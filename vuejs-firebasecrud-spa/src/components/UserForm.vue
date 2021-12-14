<template>
  <div class="user-form">
    <v-btn @click="dialog = !dialog" color="primary" v-if="!user"
      >Adicionar Usuario</v-btn
    >
    <v-btn
      @click="
        dialog = !dialog
        setData()
      "
      color="primary"
      v-else
      >Editar Usuario</v-btn
    >

    <v-dialog v-model="dialog" persistent width="600px">
      <v-card>
        <v-card-title v-if="!user">Adicionar Usuario</v-card-title>
        <v-card-title v-else>Editar Usuario</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form">
            <v-text-field
              v-model="name"
              :rules="fieldRules"
              label="Nome do Usuario"
              required
              outline
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              :rules="fieldRules"
              label="Email do Usuario"
              required
              outline
            >
            </v-text-field>

            <v-btn
              elevation="2"
              color="primary"
              @click="storeUser"
              :loading="isLoading"
              v-if="!user"
            >
              Criar
            </v-btn>

            <v-btn
              elevation="2"
              color="primary"
              @click="updateUser"
              :loading="isLoading"
              v-else
            >
              Atualizar
            </v-btn>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { usersCollection, db } from '../firebase'
import { addDoc, updateDoc, doc } from 'firebase/firestore'

export default {
  name: 'UserForm',
  props: ['user', 'index'],

  data() {
    return {
      isLoading: false,
      valid: false,
      dialog: false,
      name: '',
      email: '',
      fieldRules: [(v) => !!v || 'Esse campo é obrigatorio']
    }
  },

  methods: {
    resetForm() {
      this.$refs.form.reset()
    },

    async storeUser() {
      if (this.valid) {
        try {
          this.isLoading = false
          this.dialog = false

          await addDoc(usersCollection, {
            name: this.name,
            email: this.email
          })

          await this.resetForm()

          this.isLoading = false
          this.dialog = false
        } catch (e) {
          console.log(e)
        }
      } else {
        alert('Preencha todos os campos!!!')
      }
    },

    async updateUser() {
      if (this.valid) {
        try {
          this.isLoading = false

          let data = {
            name: this.name,
            email: this.email
          }

          const userDoc = doc(db, 'users', this.user.entry_id)
          await updateDoc(userDoc, data)

          this.$emit('user:added', data)
          await this.resetForm()

          this.isLoading = false
          this.dialog = false
          data.index = this.index
          this.$emit('user:updated', data)

          alert('Usuario atualizado!')
        } catch (e) {
          console.log(e)
        }
      } else {
        alert('Preencha todos os campos!!!')
      }
    },

    setData() {
      if (this.user) {
        this.name = this.user.name
        this.email = this.user.email
      }
    }
  },
  mounted() {
    this.setData()
  }
}
</script>
