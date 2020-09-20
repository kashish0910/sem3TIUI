<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">
      Select the type of cover
    </v-row>
    <v-row justify="center">
      <!-- offset used to create space between the columns -->
      <v-col cols=12 sm=2 md=3 offset-md="0.001">
        <div class="my-2">
            <v-btn color="blue" dark large>Individual Plan  </v-btn>
         </div>
      </v-col>
       <v-col cols=12 sm=2 md=2 >   
          <div class="my-2">
            <v-btn color="blue" dark large offset-md="0.1">Family Floater</v-btn>
          </div>
       </v-col>
    </v-row>
  </v-container>
</template>