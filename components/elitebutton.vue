<template>
  <v-row
  
   justify="center"

   style="min-height: 100px;">
  
     <!-- the @click.... helps in extending the card with the text after a click -->
    <v-col class="shrink" >
      <v-btn justify="center"
        class="ma-2"
        color="primary"
        @click="expand = !expand"
      >
        ELITE
      </v-btn>

      <v-expand-transition>
        <v-row>
          
        <v-card 
          v-show="expand"
          height="260"
          width="300"
          class="mx-auto">
          <v-card-text>
            <v-row>
          1. Worldwide emergency hospitalization   (excluding US/Canada)</v-row>
          <v-row>
          2. International treatment for 11 CI</v-row>
          <v-row >
          3. Maternity & OPD covered</v-row>
          <v-row >
          4. Pre-Existing Disease waiting period - 2   years </v-row>
         </v-card-text>
       </v-card>
       
        </v-row>
      </v-expand-transition>
    </v-col>
    <!-- display property -->
    <div class="mx-4 hidden-sm-and-down"></div>

    
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      
      expand: false,
    }),
  }
</script>
