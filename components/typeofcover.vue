<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" style="font-family:Segoe UI" class="font-weight-regular" >
        What type of cover do you want?
      
        
      
    </v-row>
    <v-row justify="center">
      <!-- offset used to create space between the columns -->
      <!-- columns are used to make the buttons responsive and margin from left is added for extra small screen -->
      <v-col  sm="5" md="6"  cols="12" offset-md="0.5" class="hidden-sm-and-down">
        <div class="my-2">
          <v-btn color="#A4C6EF" dark large offset-md="0.5"  height="110" width="200" style="font-family:Segoe UI" class="font-weight-regular">Individual Plan </v-btn>
        </div>
      </v-col>
      <!-- columns are used to make the buttons responsive and different margin from left and right is added for extra small screen -->
      <v-col sm="4" md="3" cols="12" class="hidden-sm-and-down">
        <div class="my-2">
          <v-btn color="#A4C6EF" dark large offset-md="0.5" height="110" width="200" style="font-family:Segoe UI" class="font-weight-regular"
            >Family Floater</v-btn
          >
        </div>
      </v-col>
      
      
      <v-col  sm="5" md="4"  cols="6" offset-md="0.5" class="hidden-md-and-up">
        <div class="my-2">
          <v-btn color="#A4C6EF" dark large offset-md="0.5"  height="65" width="132" style="font-family:Segoe UI" class="font-weight-regular">Individual Plan </v-btn>
        </div>
      </v-col>
      <!-- columns are used to make the buttons responsive and different margin from left and right is added for extra small screen -->
      <v-col sm="4" md="4" cols="6" class="hidden-md-and-up">
        <div class="my-2">
          <v-btn color="#A4C6EF" dark large offset-md="0.5"  height="65" width="132" style="font-family:Segoe UI" class="font-weight-regular"
            >Family Floater</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>