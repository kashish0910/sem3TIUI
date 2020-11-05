<template>
  <v-row >
    <v-col md="10" cols="12" class="ml-md-16">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- three text fields were created within a row and column -->
        <v-container>
          <v-text-field
            v-model="name"
            :counter="10"
            color="black"
            light
            fixed
            app
            :rules="nameRules"
            style="font-family:Segoe UI" 
            
            label="Name"
            class="required; font-weight-regular"
            
            outlined
          >
            required>
          </v-text-field>

          <v-text-field
            v-model="email"
            color="black"
            light
            fixed
            app
            :rules="emailRules"
            style="font-family:Segoe UI" 
            label="E-mail"
             class="required; font-weight-regular"
            outlined
          >
            required>
          </v-text-field>

          <v-text-field
            v-model="phonenumber"
            color="black"
            light
            fixed
            app
            :rules="phonenumberRules"
            style="font-family:Segoe UI" 
            label="Phone Number"
             class="required; font-weight-regular"
            outlined
          >
            required>
          </v-text-field>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>2

<script>
// email valid makes sure that a correct format is types
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phonenumer: "",
    phonenumberRules: [
      (v) => !!v || "Phone Number is required",
      // v => /.+@.+\..+/.test(v) || 'Phone Number must be valid',
    ],

    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4',
    // ],
    checkbox: true,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
.required {
  color: blue;
}
</style>