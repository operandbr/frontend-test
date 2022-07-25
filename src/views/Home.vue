<template>
  <div>
    <section class="h-container">
      <BreadCrumb/>
      <router-link  to="/user-registration">
      <button class="h-btn">
        <font-awesome-icon icon="fa-solid fa-plus" /> Novo Registro
      </button>
      </router-link>
    </section>
    <section class="t-container">
      <table v-if="users.length > 0">
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Usuário</th>
            <th>Celular</th>
            <th>Cpf</th>
            <th>Data de Nascimento</th>
            <th colspan="1">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.fullName }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.phoneNumber | formatPhone }}</td>
            <td>{{ user.cpf | formatCpf}}</td>
            <td>{{ user.birthDate | formatDate }}</td>
            <td colspan="1" class="t-options">
              <button @click="prepareToEdit(user)">
                <font-awesome-icon class="t-btn-edit" icon="fa-solid fa-pen" />
              </button>
              <button @click="selectToDelete(user)">
                <font-awesome-icon class="t-btn-trash" icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="t-empty">
        <font-awesome-icon class="t-empty" icon="fa-solid fa-circle-exclamation" />
        <h1>Não há dados Cadastrados <br>
        <span>Adicione Novos registros no botão acima </span></h1>
      </div>
    </section>
    <div class="modal" v-if="showModal">
    <ConfirmModal
      v-if="showModal"
      @close="closeModal"
      @confirm="confirmDeletation"/>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import ConfirmModal from '@/components/ConfirmModal.vue'
import firebaseService from '../service/firebaseService.js'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    BreadCrumb,
    ConfirmModal
  },
  data () {
    return {
      showModal: false,
      users: [],
      selected: null
    }
  },
  created () {
    this.getUsersData()
  },
  methods: {
    ...mapMutations(['setUser']),
    async getUsersData () {
      this.users = await firebaseService.findAllUsers()
    },
    closeModal (close) {
      this.showModal = close
      this.selected = null
    },
    selectToDelete (user) {
      this.showModal = true
      this.selected = user
    },
    prepareToEdit (user) {
      this.setUser(user)
      this.$router.push('/user-update')
    },
    confirmDeletation () {
      this.showModal = false
      firebaseService.deleteUSer(this.selected.id)
        .then(() => {
          this.users = this.users.filter(user => user.id !== this.selected.id)
          this.selected = null
          alert('Registro removido com sucesso')
        }).catch(() => {
          this.selected = null
          alert('Erro ao remover registro')
        })
    }
  }
}
</script>

<style lang="scss">
.h-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
  @media screen and (max-width: $small-screen) {
    flex-direction: column;
    row-gap: 32px;
  }
  .h-btn {
    height: 40px;
    border: none;
    width: 200px;
    font-weight: 550;
    color: $grey;
    background-color: $success;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 4px;
    @media screen and (max-width: $small-screen) {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px $success;
    }
  }
}
.t-container {
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
    td,
    th {
      max-width: 150px;
      border: 1px solid $primary;
      text-align: left;
      padding: 14px
    }

    thead {
      background-color: $contrast;
    }
    thead tr th {
      color: $grey;
    }

    tbody tr td {
        button {
          background-color: $grey;
          border-radius: 50%;
          border: 0px;
          width: 30px;
          height: 30px;
          margin-right: 12px;
          cursor: pointer;

          .t-btn-edit {
            color: $success;
          }
          .t-btn-trash {
            color: $danger;
          }
          &:hover:nth-child(1) {
            border: 2px solid $success;
          }
           &:hover:nth-child(2) {
            border: 2px solid $danger;
          }
      }
    }
  }
  .t-empty {
      height: 300px;
      margin-bottom: 32px;
      border: 2px solid $primary;
      text-align: center;
      .t-empty {
        border: none;
        margin: 32px 0;
        width: 80px;
        height: 80px;
        color: $contrast;
      }

      h1 {
        line-height: 50px;
        letter-spacing: 1.5px;

        span {
          color: $success;
          opacity: .9;
        }
      }
    }
}
</style>
