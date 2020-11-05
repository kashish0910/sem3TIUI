  <template>
    <div>
      
     
     

      <!-- <v-content> -->
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
          <!-- this page has the stepper form with heading and card -->
          <!-- margin added for all screens from both sides -->
          <v-row class="mx-md-12 mx-sm-8 mx-0">
            <!-- this column is hidden in md screen size and in screen size bigger than md -->
            <!-- <v-col justify="center" cols="12" sm="12" class="hidden-md-and-up" >
              <h2> Lifeline Health Insurance </h2>
            </v-col> -->
            <!-- this column is hidden in md screen size and in screen size bigger than md -->
            <v-col  sm="1" class="hidden-md-and-up"> </v-col>   
            <v-col cols="12" lg="3" md="5" sm="10" class="hidden-sm-and-down">
              <insurancecard/>
            </v-col>
            <!-- this column is hidden in sm screen size and in screen size smalled than sm -->
            <v-col cols="12" lg="9" md="7" sm="12" class="hidden-sm-and-down" >
              <h1 style="color:#223C77; font-family:Segoe UI" class="font-weight-regular">Welcome to Lifeline - Individual and Family Floater Plans </h1>
              <steps/>
            </v-col>
            <!-- this column is hidden in sm screen size and in screen size smalled than sm -->
            <v-col justify="center" cols="12" lg="9" md="8" sm="12" class="hidden-md-and-up" >
              <h3 style="color:#223C77; font-family:Segoe UI" class="font-weight-regular">Welcome to Lifeline Insurance - Individual and Family Floater Plans </h3>
              <verticalsteps/>
            </v-col>
          
          </v-row>
       </v-container>
      <!-- </v-content> -->
    </div>
  </template>

  <script>
  </script>

  <style> 
  </style>