<template>
  <div>
    <bread-crumb>
      <li>
        <router-link :to="currentPath" >
          <font-awesome-icon
            class="b-icon"
            :icon="breadIcon" />
          {{ breadName }}
        </router-link >
      </li>
    </bread-crumb>
    <h3>
      <router-link to="/">
        <font-awesome-icon icon="fa fa-arrow-left" />
        Votar Para Home
      </router-link>
    </h3>
    <div class="form-container">
      <form @submit.prevent="saveOrUpadate">
        <div class="i-fields">
          <div class="i-container">
            <label> Nome Completo </label>
            <div class="i-decoration">
              <input
                v-model="fullName"
                type="text"
                required
              />
            </div>
          </div>
          <div class="i-container">
            <label>Nome de Usuário</label>
            <div class="i-decoration">
              <input
                v-model="userName"
                type="text"
                required
              />
            </div>
          </div>
          <div class="i-container">
            <label>Data de Nascimento</label>
            <div class="i-decoration">
              <input
                v-model="birthDate"
                type="date"
                required
              />
            </div>
          </div>
          <div class="i-container">
            <label>Cpf</label>
            <div class="i-decoration">
              <the-mask
                :masked="false"
                mask="###.###.###-##"
                v-model="cpf"
                type="text"
                required
              />
            </div>
          </div>
          <div class="i-container">
            <label> Telefone Celular </label>
            <div class="i-decoration">
               <the-mask
                :masked="false"
                mask="(##) #####-####"
                v-model="phoneNumber"
                type="text"
                required
              />
            </div>
          </div>
        </div>
        <div class="f-submit">
          <button type="submit" class="f-btn">
            <font-awesome-icon icon="fa-solid fa-save"/>
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BreadCrumb from '@/components/BreadCrumb'
import usersService from '../service/firebaseService'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    BreadCrumb
  },
  data () {
    return {
      id: '',
      fullName: '',
      userName: '',
      birthDate: '',
      cpf: '',
      phoneNumber: '',
      breadName: 'Novo Registro',
      breadIcon: 'fa-solid fa-plus',
      currentPath: '/user-registration'
    }
  },
  mounted () {
    this.verifyUpdate()
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapActions(['clearUser']),
    saveOrUpadate () {
      if (this.$route.name === 'UserUpdate') {
        this.updateUser()
      } else {
        this.saveUser()
      }
    },
    verifyUpdate () {
      if (this.$route.name === 'UserUpdate') {
        this.breadName = 'Atualizar Registro'
        this.breadIcon = 'fa-solid fa-pen'
        this.currentPath = '/user-update'
        this.id = this.getUser.id
        this.fullName = this.getUser.fullName
        this.userName = this.getUser.userName
        this.birthDate = this.getUser.birthDate
        this.cpf = this.getUser.cpf
        this.phoneNumber = this.getUser.phoneNumber
      }
    },
    saveUser () {
      usersService.saveUser(this.fullName, this.userName, this.birthDate, this.cpf, this.phoneNumber)
        .then(() => {
          alert('Usuário Cadastrado com sucesso')
          this.clearForm()
          this.$router.push('/')
        }).catch(() => {
          alert('Erro ao cadastrar usuário contate o administrador')
        })
    },
    updateUser () {
      usersService.updateUser(this.id, this.fullName, this.userName, this.birthDate, this.cpf, this.phoneNumber)
        .then(() => {
          alert('Usuário Atualizado com sucesso')
          this.clearForm()
          this.clearUser()
          this.$router.push('/')
        }).catch(() => {
          alert('Erro ao atualizar usuário contate o administrador')
        })
    },
    clearForm () {
      this.fullName = ''
      this.userName = ''
      this.birthDate = ''
      this.cpf = ''
      this.phoneNumber = ''
    }
  }
}
</script>
<style scoped lang="scss">
h3 {
  text-align: left;
  margin: 32px 0;

  a {
    color: $primary;
    text-decoration: none;
    &:hover {
      color: $secondary;
    }
  }
}

.form-container {
  padding: 16px;
  border: 2px solid $primary;
  .i-fields {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .i-container {
      width: 48%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: $small-screen) {
        width: 100%;
      }
      label {
        margin-bottom: 8px;
        text-align: left;
      }

      .i-decoration {
        border-radius: 4px;
        margin-bottom: 16px;
        padding: 8px;
        border: 2px solid $primary;

        input {
          width: 100%;
          height: 20px;
          background-color: $grey;
          border: none;
          font-size: 16px;

          &:focus-within {
            outline: none;
          }
        }

        &:focus-within {
          border: 2px solid $contrast;
        }
      }
    }
  }
  .f-submit {
    text-align: right;

    .f-btn {
      height: 40px;
      border: none;
      width: 200px;
      font-weight: 550;
      color: $grey;
      background-color: $success;
      font-size: 14px;
      letter-spacing: 2px;
      border-radius: 4px;
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px $success;
      }

      @media screen and (max-width: $small-screen) {
        width: 100%;
        margin-top: 32px;
      }
    }
  }
}
</style>
