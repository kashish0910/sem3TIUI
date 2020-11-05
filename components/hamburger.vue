<template>
  <div class="text-center">
    <!-- open on hoven command allows the card to slide down when hovered upon -->
    <!-- colour and theme changed to white and light respectively -->
    <v-menu
      open-on-hover
      color="white" light
      top
      offset-y
      id="create" flat>
      <template v-slot:activator="{ on, attrs }">
        <v-col sm=0 class="mb-7 ps-0">
        <v-btn
          color="white"
          dark width="10"
          light
          v-bind="attrs"
          v-on="on"
          >
        
        <v-app-bar-nav-icon
        color="#656464"
        v-bind="attrs"
        v-on="on"></v-app-bar-nav-icon>
        </v-btn>
        </v-col>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'SIGN IN' },
        { title: 'INSURANCE' },
        { title: 'ABOUT US' },
        { title: 'INSTA RENEW' },
        { title: 'CONTACT US' },
        { title: 'BLOGS' },
      ],
    }),
  }
</script>