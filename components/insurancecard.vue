<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      src="Health-Insurance-renew.png"
      height="410px"
    ></v-img>

    <v-card-title>
      Why Lifeline Health Insurace?
    </v-card-title>

    <v-card-subtitle>
      Protection plans that works best
      for you and your family.
    </v-card-subtitle>
     
     <!-- the lines are broken with <br> -->
    <v-card-text class="text justify">
      Lifeline is a holistic plan from Royal Sundaram that covers the health insurance needs of you and your family.<br><br>
      * 100% Reload of Sum Insured at no extra cost.<br><br>
      * Double your Sum Insured in 5 claim free years.
    </v-card-text>
      
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: true,
    }),
  }
</script>