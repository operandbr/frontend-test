<template>
  <div class="container mt-4">
    <b-form class="form">
      <b-form-group label="First Name" label-for="user_first_name">
        <b-form-input
          id="first_name"
          type="text"
          v-model.trim="user.firstName"
          @change="$v.user.firstName.$touch()"
          required
          :state="validationName"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!this.$v.user.firstName.required"
          >This field is required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback v-if="!this.$v.user.firstName.minLength"
          >Minimum three characters</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group class="mt-3" label="Last Name" label-for="user_last_name">
        <b-form-input
          id="last_name"
          type="text"
          v-model.trim="user.lastName"
          @change="$v.user.lastName.$touch()"
          required
          :state="validationLName"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!this.$v.user.lastName.required"
          >This field is required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback v-if="!this.$v.user.lastName.minLength"
          >Minimum three characters</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group
        :messages="messages"
        :validator="$v.user.email"
        class="mt-3"
        label="Email"
        label-for="user_email"
      >
        <b-form-input
          id="user_email"
          type="email"
          v-model.trim="user.email"
          @change="$v.user.email.$touch()"
          required
          :state="validationEmail"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!this.$v.user.email.required"
          >This field is required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback v-if="!this.$v.user.email.email"
          >This email is invalid</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group class="mt-3" label="Password" label-for="user_password">
        <b-form-input
          id="user_password"
          type="password"
          v-model.trim="user.password"
          @change="$v.user.password.$touch()"
          required
          :state="validationPass"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!this.$v.user.password.required"
          >This field is required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback v-if="!this.$v.user.password.minLength"
          >This password is invalid (Minimum six (6) characters)
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        class="mt-3"
        label="Confirm password"
        label-for="user_confirm_password"
      >
        <b-form-input
          id="user_password2"
          type="password"
          v-model.trim="user.password2"
          @change="$v.user.password2.$touch()"
          required
          :state="validationConfirmPass"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!this.$v.user.password2.required"
          >This field is required</b-form-invalid-feedback
        >
        <b-form-invalid-feedback v-if="this.$v.user.password2.$error"
          >Passwords do not match</b-form-invalid-feedback
        >
      </b-form-group>
      <b-button
        type="submit"
        variant="success"
        class="float-right mt-2"
        @click="saveUser()"
        :disabled="!disabledButton"
      >
        Save
      </b-button>
    </b-form>
  </div>
</template>
<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { singleErrorExtractorMixin } from "vuelidate-error-extractor";

export default {
  name: "Form",
  mixins: [singleErrorExtractorMixin],
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
      },
      editSave: "newUser",
      buttonD: false,
    };
  },
  props: {
    messages: {
      type: Object,
    },
  },
  validations: {
    user: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      password2: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
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
  computed: {
    validationName() {
      if (this.$v.user.firstName.$dirty === false) {
        return null;
      }

      return !this.$v.user.firstName.$error;
    },
    validationLName() {
      if (this.$v.user.lastName.$dirty === false) {
        return null;
      }

      return !this.$v.user.lastName.$error;
    },
    validationEmail() {
      if (this.$v.user.email.$dirty === false) {
        return null;
      }

      return !this.$v.user.email.$error;
    },
    validationPass() {
      if (this.$v.user.password.$dirty === false) {
        return null;
      }

      return !this.$v.user.password.$error;
    },
    validationConfirmPass() {
      if (this.$v.user.password2.$dirty === false) {
        return null;
      }

      return !this.$v.user.password2.$error;
    },
    disabledButton() {
      if (this.$v.user.$dirty === false && this.editSave === "newUser") {
        return null;
      }

      return !this.$v.user.$invalid;
    },
  },
};
</script>
<style >
.title {
  font-family: "Poppins" sans-serif;
  color: aqua;
  font-style: normal;
}

.form {
  background: #f4f8e6;
  display: table;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(30, 60, 90, 0.1);
}

.label {
  color: #ffff !important;
  font-family: "Poppins" sans-serif;
}
</style>