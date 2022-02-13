<template>
    <div class="row justify-content-center container">
        <div class="col-md-5">
            <span class="text-center title">Editar Usuário</span>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Nome</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Editar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      user: {
      }
    }
  },
  created () {
    const dbRef = db.collection('users').doc(this.$route.params.id)
    dbRef.get().then((doc) => {
      this.user = doc.data()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onUpdateForm (event) {
      event.preventDefault()
      db.collection('users').doc(this.$route.params.id)
        .update(this.user).then(() => {
          console.log('Usuário atualizado com sucesso!')
          this.$router.push('/list')
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    border-radius: 10px;
    background: #333333;
    margin: 0 auto;
    padding: 40px;
    width: 50%;
    color: white;
    .title {
      font-size: 24px;
    }
    .form-group {
      margin-top: 20px;
      button {
        margin: 15px auto;
        width: 100%;
      }
    }
  }
</style>
