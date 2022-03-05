<template>
  <div class="container mt-4">
    <b-form>
      <b-form-group label="Name" label-for="user_name">
        <b-form-input
          id="user_name"
          type="text"
          v-model="user.name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="user_email">
        <b-form-input
          id="user_email"
          type="email"
          v-model="user.email"
          required
        ></b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        variant="success"
        class="float-right mt-2"
        @click="saveUser()"
      >
        Save
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "Form",

  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      editSave: "newUser",
    };
  },
  methods: {
    saveUser() {
      if (this.editSave === "updateUser") {
        let users = JSON.parse(localStorage.getItem("users"));
        users[this.$route.params.index] = this.user;
        localStorage.setItem("users", JSON.stringify(users));

        this.$router.push({ name: "list" });
      } else {
        let users = localStorage.getItem("users")
          ? JSON.parse(localStorage.getItem("users"))
          : [];
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));

        this.$router.push({ name: "list" });
      }
    },
  },
  created() {
    if (
      this.$route.params.index === 0 ||
      this.$route.params.index !== undefined
    ) {
      this.editSave = "updateUser";
      let users = JSON.parse(localStorage.getItem("users"));
      this.user = users[this.$route.params.index];
    }
  },
};
</script>