<template>
  <div class="text-center">
    <!-- open on hoven command allows the card to slide down when hovered upon -->
    <!-- colour and theme changed to white and light respectively -->
    <v-menu
      open-on-hover
      color="white" light
      top
      offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#223C77"
          dark
          v-bind="attrs"
          v-on="on"
          height="48"
          width="20">
          MENU
        </v-btn>
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