<template>
  <div class="container mt-4">
    <template v-if="empyUsers">
      <div class="homepage">
        <p class="mt-4">You don't have any registered users yet.</p>
        <img src="../assets/images/home.svg" class="img-home mb-2" />
        <b-button to="/signup" class="btn-home mt-5 mb-4" size="lg">
          Create user
        </b-button>
      </div>
    </template>
    <div v-else>
      <div class="container">
        <h2 class="text-center mb-4">User list</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>
                <b-button variant="info" @click="editUser(index)"
                  >Edit</b-button
                >
                <b-button
                  variant="danger"
                  class="ml-2"
                  @click="deleteUser(user, index)"
                  >Delete</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
        <b-button to="/signup" class="float-right mt-2 mr-2" variant="secondary"
          >Come back</b-button
        >
      </div>
    </div>
    <b-modal title="Delete user" ref="modalDelete" hide-footer>
      <section class="text-center d-block">
        <span>Really want to delete the user {{ userSelected.name }}?</span>
        <div class="mt-3 d-flex justify-content-end">
          <b-button variant="secondary" @click="hideModal">Cancel</b-button>
          <b-button class="ml-2" variant="danger" @click="confirmDelete"
            >Delete</b-button
          >
        </div>
      </section>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      users: [],
      userSelected: [],
    };
  },
  methods: {
    editUser(index) {
      this.$router.push({ name: "signup", params: { index } });
    },
    deleteUser(user, index) {
      this.userSelected = user;
      this.userSelected.index = index;
      this.$refs.modalDelete.show();
    },
    hideModal() {
      this.$refs.modalDelete.hide();
    },
    confirmDelete() {
      this.users.splice(this.userSelected.index, 1);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.hideModal();
    },
  },
  created() {
    this.users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
  },
  computed: {
    empyUsers() {
      return this.users.length === 0;
    },
  },
};
</script>
<style scoped>
h2,
p {
  font-family: "Lato", sans-serif;
  color: #7a72ff;
}
.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.img-home {
  width: 400px;
  height: 400px;
  max-width: max-content;
  margin-top: 15px;
}

.btn-home {
  background: #7a72ff;
}
</style>
