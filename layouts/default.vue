<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="blue" height="25" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
      <!-- Component Example -->
      <v-spacer></v-spacer>
      <v-card
       color="blue lighten-3"
       height="30">
        <p>New Policy: 022-50061070 | Customer Service: 1860 425 0000 | Motor Claim Intimation / Crop Insurance: 1800 568 9999</p>
      </v-card>
     
      <!-- components added which are persistent throughout -->
      <!-- extention added to toolbar -->
      <template v-slot:extension>
        <VuetifyLogo/>
        <v-spacer></v-spacer>
        <insurance/>
        <aboutus/>
        <instarenew/>
        <contactus/>
        <blogs/>
        <signin/>
       <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
       </v-btn>
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