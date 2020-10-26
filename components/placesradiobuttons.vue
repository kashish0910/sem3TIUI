<template>
 <!-- <v-card color= "rgb(205, 231, 248)" id="create" flat> -->
  <v-card color= "white" id="create" flat>
    <!-- <v-card id="create"> -->
    <v-container fluid>
      <v-row justify="center">
        <v-col md="12" sm="12">
         <!-- two rows of radio buttons are formed with different transitions which helps in selecting 
         one at a time and deselects if clicked on another -->
       
         <!-- <v-col cols="12" sm="6" md="4"> -->
          <!-- <v-subheader >Select the Sum Insured</v-subheader> -->
          <!-- columns added and defined -->
          <v-radio-group row v-model="transition" hide-details>
           
            <v-col sm="2">
            <v-radio value="slide-y-transition" label="Delhi" color="black" light fixed app></v-radio>
            </v-col>
             <v-col sm="3">
            <v-radio value="slide-y-reverse-transition" label="Hyderabad" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="2">
            <v-radio value="slide-x-transition" label="Mumbai" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="3">
            <v-radio value="slide-x-reverse-transition" label="Bengalaru" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="2">
            <v-radio value="scale-transition" label="Thane" color="black" light fixed app></v-radio>
            </v-col>
         </v-radio-group>
        </v-col>
      </v-row>
           
     <v-row justify="center">
       <v-col md="12" sm="12">
        <v-radio-group row v-model="transition" hide-details>
         <v-row justify="center">
            <v-col sm="2">
            <v-radio value="scale-y-transition" label="Pune" color="black" light fixed app></v-radio>
            </v-col>
             <v-col sm="2">
            <v-radio value="scale-y-reverse-transition" label="Nagpur" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="3">
            <v-radio value="scale-x-transition" label="Vadodara" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="2">
            <v-radio value="scale-x-reverse-transition" label="Chennai" color="black" light fixed app></v-radio>
            </v-col>
            <v-col sm="2">
            <v-radio value="slide-transition" label="Gurgaon" ></v-radio>
            </v-col>
         </v-row>
        </v-radio-group>
        </v-col>
        
      </v-row>
   </v-container>
   <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
   ></v-speed-dial> 
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