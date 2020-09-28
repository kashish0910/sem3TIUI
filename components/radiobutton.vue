<template>
  <v-card id="create">
    <v-container fluid>
      <v-row justify="center">
       <!-- two rows of radio buttons are formed with different transitions which helps in selecting 
       one at a time and deselects if clicked on another -->
       <v-radio-group row v-model="transition" hide-details>
         <v-col>
         <v-radio value="slide-y-transition" label="05 Lakhs"></v-radio>
         </v-col>
         <v-col>
         <v-radio value="slide-y-reverse-transition" label="10 Lakhs"></v-radio>
         </v-col>
         <v-col>
         <v-radio value="slide-x-transition" label="15 Lakhs"></v-radio>
         </v-col>
         <v-col>
         <v-radio value="slide-x-reverse-transition" label="20 Lakhs"></v-radio>
         </v-col>
         <v-col>
         <v-radio value="scale-transition" label="50 Lakhs"></v-radio>
         </v-col>
        </v-radio-group>
      </v-row>
    </v-container>
    
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),
  }
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>