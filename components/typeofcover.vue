<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">
      Select the type of cover
    </v-row>
    <v-row justify="center">
      <!-- offset used to create space between the columns -->
      <!-- columns are used to make the buttons responsive and margin from left is added for extra small screen -->
      <v-col cols=12 sm=5 md=4 offset-md="0.5" class="ml-10">
        <div class="my-2">
            <v-btn color="blue" dark large>Individual Plan  </v-btn>
         </div>
      </v-col>
      <!-- columns are used to make the buttons responsive and different margin from left and right is added for extra small screen -->
       <v-col cols=12 sm=4 md=4 class="ml-16 mr-6" >   
          <div class="my-2">
            <v-btn color="blue" dark large offset-md="0.5">Family Floater</v-btn>
          </div>
       </v-col>
    </v-row>
  </v-container>
</template>