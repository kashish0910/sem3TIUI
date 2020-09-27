<template>
  <v-row
   justify="center"
   style="min-height: 100px;">
   <!-- the @click.... helps in extending the card with the text after a click -->
   <v-col class="shrink" >
      <v-btn justify="center"
        class="ma-2"
        color="primary"
        @click="expand = !expand">
        SUPREME
      </v-btn>

      <v-expand-transition>
        <v-row>
          
        <v-card 
          v-show="expand"
          height="260"
          width="300"
          class="mx-auto">
          <v-card-text>
            <v-row >
          1. 20% No Claim Bonus every year up to max of 100%</v-row>
          <v-row >
          2. Annual Health Check up & Emergency domestic evacuation</v-row>
          <v-row >
          3. Second opinion for 11 Critical illnesses</v-row>
          <v-row >
          4. Second opinion for 11 Critical illnesses</v-row>
         </v-card-text>
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
