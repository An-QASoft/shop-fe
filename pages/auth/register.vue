<template>
  <div class="flex justify-center items-center h-screen bg-yellow-200 pr-52">
    <div class="relative ml-52">
      <span class="absolute top-0 left-10 text-black text-center font-bold text-4xl p-2">Register</span>
      <img src="https://th.bing.com/th?id=OIF.p%2b1nOHfAQ8LRgO3I0ZCzSQ&rs=1&pid=ImgDetMain" alt="Description of image" class="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover" />
    </div>
    <v-row justify="end">
      <v-col cols="12" sm="8">
        <div class="p-6 rounded-lg shadow-md border border-2 border-gray-300 flex flex-col justify-between bg-blue-100">
          <h1 class="text-2xl font-bold mb-4 text-center animate-pulse">Register</h1>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-account text-3xl mr-3 mb-3"></i>
                  <v-text-field :rules="rules_name" v-model="form.name" label="Input Name" variant="underlined" required outlined class="flex-grow"></v-text-field>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-email text-3xl mr-3 mb-3"></i>
                  <v-text-field :rules="rules_email" v-model="form.email" label="Input Email" variant="underlined" required outlined class="flex-grow"></v-text-field>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-lock text-3xl mr-3 mb-3"></i>
                  <v-text-field type="password" :rules="rules_password" v-model="form.password" label="Input Password" variant="underlined" required outlined class="mb-2 flex-grow"></v-text-field>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="flex items-center">
                  <i class="mdi mdi-lock text-3xl mr-3 mb-3"></i>
                  <v-text-field type="password" :rules="rules_confirm_password" v-model="form.confirm_password" label="Confirm Password" variant="underlined" required outlined class="mb-2 flex-grow"></v-text-field>
                </div>
              </v-col>
            </v-row>
            <div class="flex justify-center">
              <v-btn @click="register" :disabled="!valid" color="primary">Register</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      form: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      rules_name: [
        value => !!value || "Name is required.",
        value => (value || "").length <= 50 || "Name must be less than 50 characters."
      ],
      rules_email: [
        value => !!value || "Email is required.",
        value => (value || "").length <= 25 || "Email must be less than 25 characters.",
        value => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid email.";
        }
      ],
      rules_password: [
        value => !!value || "Password is required.",
        value => (value || "").length >= 8 || "Password must be at least 8 characters long."
      ],
      rules_confirm_password: [
        value => !!value || "Confirm Password is required.",
        value => value === this.form.password || "Passwords must match."
      ]
    };
  },
  methods: {
    async register() {
      if (this.$refs.form.validate()) {
        try {
          const response = await axios.post("http://localhost:8000/api/auth/register", this.form);
          this.$router.push("/login");
        } catch (error) {}
      }
    }
  }
};
</script>

