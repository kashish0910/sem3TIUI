<template>
  <v-row
   justify="center"
   style="min-height: 100px;">
   <!-- the @click.... helps in extending the card with the text after a click -->
   <v-col class="shrink" >
      <v-btn justify="center"
        class="ma-2"
        color="#223C77" light outlined
        width="180"
        height="100"
        @click="expand = !expand">
        CLASSIC
      </v-btn>
    

     <v-expand-transition>
        <v-row>
          <!-- added height and width to customize the size of the card -->

          <v-card 
          
           v-show="expand"
           height="260"
           width="300"
           class="mx-auto"
           color="white">
           <strong class="blue--text text--#223C77">

           <v-card-text>
              <v-row style="font-family:Segoe UI " class="font-weight-regular" >
              1. Organ donor expenses covered up to Sum Insured</v-row>
             <v-row style="font-family:Segoe UI" class="font-weight-regular">
             2. Pre & Post hospitalization covered up to Sum Insured</v-row>
             <v-row style="font-family:Segoe UI" class="font-weight-regular">
             3. Covers Ayush treatment & vaccination for animal bite</v-row >
             <v-row style="font-family:Segoe UI" class="font-weight-regular" >
             4. Pre-Existing Disease waiting period - 4 years</v-row>
           </v-card-text>
           </strong>
         </v-card>
       </v-row>
      </v-expand-transition>
   
    </v-col>
    <!-- display property -->
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
