<template>
   <v-row
     justify="center"
     style="min-height: 100px;">
    <v-col class="shrink" md="2">
      <v-btn
        class="ma-2"
        color="primary"
        @click="expand = !expand">
      
        CLASSIC
      </v-btn>

      <v-expand-transition>
        <v-card justify ="center"
          v-show="expand"
          height="450"
          width="550"
          class="mx-auto"
        ></v-card>
      </v-expand-transition>
    </v-col>

    <div class="mx-4 hidden-sm-and-down"></div>

    <v-col class="shrink" md="2">
      <v-btn
        class="ma-2"
        color="secondary"
        @click="expand2 = !expand2"
      >
        SUPREME
      </v-btn>

    <v-expand-transition>
        <v-card justify ="center"
          v-show="expand3"
          height="450"
          width="550"
          class="mx-auto"
        ></v-card>
      </v-expand-transition>
    </v-col>
  
     <v-col class="shrink" md="2">
      <v-btn
        class="ma-2"
        color="secondary"
        @click="expand3 = !expand3"
      >
        ELITE
      </v-btn>

      <v-expand-transition>
        <v-card justify ="center"
          v-show="expand3"
          height="450"
          width="550"
          class="mx-auto"
        ></v-card>
      </v-expand-transition>
    </v-col>
  
  
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      expand: false,
      expand2: false,
      expand3: false,
    }),
  }
</script>
