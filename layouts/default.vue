<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="blue" dark fixed app>
      <v-toolbar-title></v-toolbar-title>
       <!-- Component Example -->
     
     <VuetifyLogo/>
    <template v-slot:extension>
      
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
    
    <!-- Footer -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
    color: black;
  }
</style>