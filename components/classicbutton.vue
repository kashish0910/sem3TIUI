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
        CLASSIC
      </v-btn>

      <v-expand-transition>
        <v-card 
          v-show="expand"
          height="260"
          width="950"
          class="mx-auto">
          <v-card-text>
          1. Organ donor expenses covered up to Sum Insured<br><br>
          2. Pre & Post hospitalization covered up to Sum Insured<br><br>
          3. Covers Ayush treatment & vaccination for animal bite<br><br>
          4. Pre-Existing Disease waiting period - 4 years
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
