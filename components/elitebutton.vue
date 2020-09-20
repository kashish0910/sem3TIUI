<template>
  <v-row
  
    justify="center"

    style="min-height: 100px;"
  >
    <v-col class="shrink" >
      <v-btn justify="center"
        class="ma-2"
        color="primary"
        @click="expand = !expand"
      >
        ELITE
      </v-btn>

      <v-expand-transition>
        <v-card 
          v-show="expand"
          height="260"
          width="300"
          class="mx-auto">
          <v-card-text>
          1. Worldwide emergency hospitalization   (excluding US/Canada)<br><br>
          2. International treatment for 11 CI<br><br>
          3. Maternity & OPD covered<br><br>
          4. Pre-Existing Disease waiting period - 2   years
         </v-card-text>
       </v-card>
      </v-expand-transition>
    </v-col>

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
