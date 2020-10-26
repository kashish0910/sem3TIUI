<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">
      <strong class="grey--text text--darken-2">
      Is your present policy from Royal Sundaram ?
      </strong>
   </v-row>
    <v-row justify="center">
      <!-- columns are used to make the buttons responsive and margin from left is added for extra small screen -->
      <v-col cols=12 sm=3 md=3 offset-md="0.001" class="ml-16">
       <div class="my-2">
         
         <!-- dashes were added to keeps the button bigger in size as it wraps around the text -->
           <v-btn x-small color="#223C77" light outlined>__________NO__________</v-btn>
       </div>
       
      </v-col>
        <!-- columns are used to make the buttons responsive and margin from left is added for extra small screen and margin is added from right for small screen -->
       <v-col cols=12 sm=4 md=3 class="ml-16 mr-sm-12" >   
          <div class="my-2">
           <v-btn x-small color="#223C77" light outlined>__________YES__________</v-btn>
          </div>
     </v-col>
    </v-row>
  </v-container>
</template>

