<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" height="25" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
      <!-- Component Example -->
      <v-spacer></v-spacer>
      <v-row >
        <!-- this column is hidden in sm screen size and in screen size smalled than sm -->
        <v-col  md="3" class="hidden-sm-and-down"> </v-col>  
        <v-col md= "9" class="hidden-sm-and-down"> 
          <v-card
            color="blue lighten-3"
            height="30"
            class="px-md-2 px-sm-2 px-0">
           <p>New Policy: 022-50061070 | Customer Service: 1860 425 0000 | Motor Claim Intimation / Crop Insurance: 1800 568 9999</p>
          </v-card>
        </v-col>
     </v-row>
     
      <!-- components added which are persistent throughout -->
      <!-- extention added to toolbar -->
      <template v-slot:extension>
        <!-- this row is hidden in sm screen size and in screen size smalled than sm -->
        <v-row class="hidden-sm-and-down">
         <VuetifyLogo/>
         <v-spacer></v-spacer>
         <insurance/>
         <aboutus/>
         <instarenew/>
         <contactus/>
         <blogs/>
         <signin/>
         <v-btn icon>
           <v-icon color="black">mdi-magnify</v-icon>
         </v-btn>
       </v-row>
       
       <!-- this column is hidden in md screen size and in screen size bigger than md -->
       <v-row class= "hidden-md-and-up">
         <v-col sm="10">
           <VuetifyLogo/>
         </v-col>
         <v-col sm="1" class="mb-sm-6 mb-4 mx-sm-2 mx-0" >
           <hamburger/>
         </v-col>
       </v-row>
     </template>
    
    </v-app-bar>
    <!-- Body -->
    <v-content light>
      <breadcrumb/>
      <nuxt /> 
    </v-content>
    <!-- footer commented as it was not required in the current task -->
    <!-- Footer -->
    <!-- <v-footer color="indigo" app>
    <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }
   
   /* background colour was changed from white to lighter blue */
   #inspire {
    background-color: rgb(205, 231, 248);
    color: black;
  }
</style>