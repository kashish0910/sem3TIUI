<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <!-- 4 stepper form..once one completed, it takes to second with a click -->
      <v-stepper-step :complete="e1 > 1" step="1">Proposer's Details</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Select Plan</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Plan Details</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 4" step="4">Place Details</v-stepper-step>
      
    </v-stepper-header>

    <v-stepper-items>
      <!-- components added in the form -->
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="black"
          height="520px">
         <v-container>
           <v-row justify="center">
             <typeofcover/> 
             <userform/>
             <yesbutton/>
            </v-row>
          </v-container>        
       </v-card>

         <v-row justify="center">
        <v-btn 
         color="primary"
          @click="e1 = 2">
         Continue 
        </v-btn>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="black"
          height="400px">
         <v-container>
             <v-row justify="center">
      Select Plan Type
      </v-row>
             <v-row justify="center">
               <!-- <buttons/>  -->
               <v-col md=4> 
                 <classicbutton/>
               </v-col>
               <v-col md=4> 
                 <supremebutton/>
               </v-col>
               <v-col md=4> 
                 <elitebutton/>
               </v-col>
              </v-row>
          </v-container>
        </v-card>
        
        <!-- continue button takes to next form, back takes to previous..click command helps to carry this function -->
       <v-row justify="center">
        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn
          
          @click="e1 = 1">
          Back
        </v-btn>
       </v-row>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="black"
          height="600px">
          <v-container>
             <v-row justify="center">
               <!-- <buttons/>  -->
               <v-col md=4> 
                 <classicbutton/>
               </v-col>
               <v-col md=4> 
                 <supremebutton/>
               </v-col>
               <v-col md=4> 
                 <elitebutton/>
               </v-col>
               <radiobutton/>
               <v-row justify="center">
               <datepicker/>
               <dropdown/>
               <knowmorebutton/>
               </v-row>
            
            
            
             </v-row>
          </v-container>
        </v-card>
        <v-row justify="center">
        <v-btn
          color="primary"
          @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn
         
          @click="e1 = 2">
          Back
        </v-btn>
        </v-row>

      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="black"
          height="400px">
          <v-container>
             <v-row justify="center">
      Select Place
      </v-row>
      <v-row>
          <Place/>
      </v-row>
           <v-row justify="center">
      Popular Places
      </v-row>
     
      <v-row justify="center">
          <placesradiobuttons/>
      </v-row>
      
      </v-container>
        </v-card>
        <v-row justify="center">
        <v-btn href="premiumpage"
          color="primary">
          <!-- @click="loading"> -->
          Continue
        </v-btn>

        <v-btn
         
          @click="e1 = 3">
          Back
        </v-btn>
        </v-row>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>