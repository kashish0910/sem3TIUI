<template >
  <v-app id="inspire">
    <v-row>
      <v-col md="12" sm="12" cols="12">
        <v-stepper v-model="e1" light>
          <v-stepper-header>
            <!-- 4 stepper form..once one completed, it takes to second with a click -->
            <v-stepper-step :complete="e1 > 1" step="1"
              >Proposer's Details</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"
              >Select Plan</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3"
              >Plan Details</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 4" step="4"
              >Place Details</v-stepper-step
            >
          </v-stepper-header>

          <v-stepper-items>
            <!-- components added in the form -->
            <v-stepper-content step="1">
              <!-- rows and columns defined to make the step responsive -->
              <v-row>
                <v-col md="12" sm="12" cols="12">
                  <v-card class="mb-12" color="white" height="600px">
                    <v-container>
                      <v-row justify="center">
                        <v-col cols="10" md="10" sm="10">
                          <typeofcover />
                          <userform />
                          <yesbutton />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-btn color="#223C77" @click="e1 = 2" dark width="300" >
                  Continue
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="white" height="590px">
                <v-container>
                  <v-row justify="center"> Select Plan Type </v-row>
                  <v-row justify="center">
                    <!-- <buttons/>  -->
                    <v-col md="4" cols="12" sm="4">
                      <classicbutton />
                    </v-col>
                    <v-col md="4" cols="12" sm="4">
                      <supremebutton />
                    </v-col>
                    <v-col md="4" cols="12" sm="4">
                      <elitebutton />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>

              <!-- continue button takes to next form, back takes to previous..click command helps to carry this function -->
              <v-row justify="center">
               
                <v-btn class="ml-sm-8 ml-8 mr-6" @click="e1 = 1"> Back </v-btn>
                <v-btn color="#223C77" @click="e1 = 3" dark width="140">
                  Continue
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="white" height="600px">
                <v-container>
                  <v-row justify="center">
                    <!-- <buttons/>  -->
                    <!-- <v-col md="4" sm="4">
                      <classicbutton />
                    </v-col>
                    <v-col md="4" sm="4">
                      <supremebutton />
                    </v-col>
                    <v-col md="4" sm="4" class="mt-0">
                      <elitebutton />
                    </v-col> -->
                  </v-row>
                  <v-row justify="center">
                    Select your preffered sum insured
                  </v-row>
                  <v-row justify="center">
                    <radiobutton />
                  </v-row>
                  <v-row justify="center">
                    <datepicker />
                    <dropdown />
                    <knowmorebutton />
                  </v-row>
                </v-container>
              </v-card>
              <v-row justify="center">
                

                <v-btn class="ml-sm-8 ml-8 mr-6" @click="e1 = 2"> Back </v-btn>
                <v-btn color="#223C77" @click="e1 = 4" dark width="100">
                  Continue
                </v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12" color="white" height="650px">
                <v-container>
                  <v-row justify="center"> Select Place </v-row>
                  <v-row>
                    <Place />
                  </v-row>
                  <v-row justify="center"> Popular Places </v-row>

                  <v-row justify="center">
                    <placesradiobuttons />
                  </v-row>
                </v-container>
              </v-card>
              <v-row justify="center">
                <v-btn class="ml-sm-8 ml-8 mr-6" @click="e1 = 3"> Back </v-btn>
                <v-btn href="premiumpage" color="#223C77" dark width="100">
                  <!-- @click="loading"> -->
                  Continue
                </v-btn>

               
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>



