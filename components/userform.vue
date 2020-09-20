<template>
 <v-row justify="center">
   <v-col md="7">
     <v-form
       ref="form"
        v-model="valid"
       lazy-validation>
  
        <v-container>
          <!-- <v-row justify="center"> -->
          <!-- <v-col cols="12" sm="6" md="8"> -->
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            outlined>
            required>
         </v-text-field>
          <!-- </v-col> -->
          <!-- </v-row> -->
  
         <v-text-field
           v-model="email"
           :rules="emailRules"
           label="E-mail"
            outlined>
           required>
         </v-text-field>

         <v-text-field
           v-model="phonenumber"
           :rules="phonenumberRules"
           label="Phone Number"
           outlined>
           required>
         </v-text-field>

      </v-container>
     </v-form>
   </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phonenumer: '',
      phonenumberRules: [
        v => !!v || 'Phone Number is required',
        // v => /.+@.+\..+/.test(v) || 'Phone Number must be valid',
      ],




      // select: null,
      // items: [
      //   'Item 1',
      //   'Item 2',
      //   'Item 3',
      //   'Item 4',
      // ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>