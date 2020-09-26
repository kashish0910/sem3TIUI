<template>
  <v-container id="dropdown-example">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <p>Please Select your TPA</p>
         <!-- the overflow button gives the command for dropdown when clicked -->
        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          
          editable
          item-value="text"
          outlined
        ></v-overflow-btn>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      
    
      dropdown_edit: [
        { text: 'Paramount Health Services Pvt. Ltd.' },
        { text: 'Medi Assist Insurance Pvt. Ltd.' },
        { text: 'Raksha Health Insurance Pvt. Ltd.' },
      
        
      ],
    }),
  }
</script>
