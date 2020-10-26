<template>
  <v-container>
    <v-row justify="center" >
      <v-col cols="12" md="6" sm=8>
        
        <v-menu
        color="black" light fixed app
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- text field with label, hint and persistent hint -->
            <!-- v-bind used to pass down the attributes...used in case of data changing -->
            <!-- blur is used to loose focus ...here date element loses focus when changed to another -->
          
            <!-- changed the colour of label and text field -->
            <v-text-field
             
              v-model="dateFormatted"
              color="black" light fixed app
             
              label="Date of Birth of Insured"
              hint="MM/DD/YYYY format"
              persistent-hint
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              outlined
            ></v-text-field>
           
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false" color="blue"></v-date-picker>
        </v-menu>
        
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
    }),

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>
<style>
</style>