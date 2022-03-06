<template>
  <div class="container mt-4">
    <!-- <div v-for="(user, index) in users" :key="index">
      <b-card :title="user.name" class="mb-3">
        <b-card-text> {{ user.email }} </b-card-text>
        <b-button variant="outline-info" @click="editUser(index)"
          >Edit</b-button
        >
        <b-button
          variant="outline-danger"
          class="ml-2"
          @click="deleteUser(user, index)"
          >Delete</b-button
        >
      </b-card>
    </div> -->
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <th scope="row">{{ user.name }}</th>
            <td>{{ user.email }}</td>
            <td>
              <b-button variant="outline-info" @click="editUser(index)"
                >Edit</b-button
              >
              <b-button
                variant="outline-danger"
                class="ml-2"
                @click="deleteUser(user, index)"
                >Delete</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-modal title="Delete user" ref="modalDelete" hide-footer>
      <section class="text-center d-block">
        <p>really want to delete the user {{ userSelected.name }}?</p>
        <div class="mt-3 d-flex justify-content-end">
          <b-button variant="outline-secondary" @click="hideModal"
            >Cancel</b-button
          >
          <b-button variant="outline-danger" @click="confirmDelete"
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
};
</script>
