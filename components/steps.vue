<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Name of step 3</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 4" step="4">Name of step 4</v-stepper-step>
      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="black"
          height="520px">
         <v-container>
           <v-row justify="center">
             <buttons/> 
             <userform/>
             <yesbutton/>
            </v-row>
          </v-container>        
       </v-card>

        <v-btn 
         color="primary"
          @click="e1 = 2">
         Continue 
        </v-btn>
        
        
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

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 1">
          Back
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="black"
          height="500px">
          <v-container>
             <v-row justify="center">
               <!-- <buttons/>  -->
               <v-col md=4> 
                 <classicbutton/>
               </v-col>
               <v-col md=4> 
                 <supremeformcopy/>
               </v-col>
               <v-col md=4> 
                 <elitebutton/>
               </v-col>
               <radiobutton/>
               <v-row justify="center">
               <datepicker/>
               <dropdown/>
               </v-row>
            
            
            
             </v-row>
          </v-container>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 2">
          Back
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card
          class="mb-12"
          color="black"
          height="200px">
        </v-card>

        <v-btn href="premiumpage"
          color="primary">
          <!-- @click="loading"> -->
          Continue
        </v-btn>

        <v-btn
          color="primary"
          @click="e1 = 3">
          Back
        </v-btn>

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