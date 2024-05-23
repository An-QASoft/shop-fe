<template>
  <div class="flex justify-center items-center h-screen bg-yellow-200 pr-52">
    <div class="relative ml-52">
      <span
        class="absolute top-0 left-10 text-black text-center font-bold text-4xl p-2"
        >Shop</span
      >
      <img
        src="https://th.bing.com/th?id=OIF.p%2b1nOHfAQ8LRgO3I0ZCzSQ&rs=1&pid=ImgDetMain"
        alt="Description of image"
        class="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover"
      />
    </div>
    <v-row justify="end">
      <v-col cols="12" sm="8">
        <div
          class="p-6 rounded-lg shadow-md border border-2 border-gray-300 flex flex-col justify-between bg-blue-100"
        >
          <h1 class="text-2xl font-bold mb-4 text-center animate-pulse">
            Login
          </h1>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-account text-3xl mr-3 mb-3"></i>
                  <v-text-field
                    :rules="rules_email"
                    v-model="form.email"
                    label="Input Email"
                    variant="underlined"
                    required
                    outlined
                    class="flex-grow"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-lock text-3xl mr-3 mb-3"></i>
                  <v-text-field
                    type="password"
                    :rules="rules_password"
                    v-model="form.password"
                    label="Input Password"
                    variant="underlined"
                    required
                    outlined
                    class="mb-2 flex-grow"
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
            <div class="flex justify-center">
              <v-btn @click="login" :disabled="!valid" color="primary">
                Login
              </v-btn>
            </div>
            <div v-if="errorMessage" class="text-red-500 text-center mt-4">
              {{ errorMessage }}
            </div>
            <div class="flex justify-center mt-4">
              <router-link to="/register" class="text-blue-500 underline">Don't have an account? Register</router-link>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex';


export default {
  data() {
    return {
      valid: false,
      form: {
        email: "",
        password: "",
      },
      errorMessage: "",
      rules_email: [
        (value) => !!value || "Email is required.",
        (value) =>
          (value || "").length <= 25 ||
          "Email must be less than 25 characters.",
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid email.";
        },
      ],
      rules_password: [
        (value) => !!value || "Password is required.",
        (value) =>
          (value || "").length >= 8 ||
          "Password must be at least 8 characters long.",
      ],
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      if (this.$refs.form.validate()) {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/auth/login",
            this.form
          );
          console.log(this);
          localStorage.setItem('token', response.data.token);
          this.$store.dispatch('login');
          this.$router.push("/dashboard");
        } catch (error) {
          if (error.response && error.response.status === 401) {
            this.errorMessage = "Invalid email or password.";
          } else {
            this.errorMessage = "An error occurred. Please try again.";
          }
        }
      }
    },
  },
};
</script>
