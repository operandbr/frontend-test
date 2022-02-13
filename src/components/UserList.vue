<template>
    <div class="row container">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.key">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user.key }}" class="btn btn-primary">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    db.collection('users').onSnapshot((snapshotChange) => {
      this.users = []
      snapshotChange.forEach((doc) => {
        this.users.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone
        })
      })
    })
  },
  methods: {
    deleteUser (id) {
      if (window.confirm('Deseja realmente deletar o usuário?')) {
        db.collection('users').doc(id).delete().then(() => {
          console.log('Usuário deletado!')
        })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    color: white;
    tbody tr td {
      color: white;
      }
  }
  .btn-primary {
    margin-right: 12px;
  }
</style>
