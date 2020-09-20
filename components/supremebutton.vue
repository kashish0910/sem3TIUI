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
        <v-card 
          v-show="expand"
          height="260"
          width="950"
          class="mx-auto">
          <v-card-text>
          1. 20% No Claim Bonus every year up to max of 100%<br><br>
          2. Annual Health Check up & Emergency domestic evacuation<br><br>
          3. Second opinion for 11 Critical illnesses<br><br>
          4. Second opinion for 11 Critical illnesses
         </v-card-text>
        </v-card>
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
