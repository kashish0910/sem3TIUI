<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <!-- Added color=black to make the icon black as the background is light -->
        <v-icon color="black">mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          // This function helps to show on which page we are not there, when its false the colur of text is blue
          disabled: false,
          // href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Health Insurance',
          disabled: false,
          // the href is commented out as my flow is on one page  and there are no pages to add to href
          // href: 'breadcrumbs_link_1',
        },
        {
          text: 'Lifeline Health Insurance',
          disabled: false,
          // href: 'breadcrumbs_link_2',
        },
        {
          text: 'Get Quote',
          // The true function shows the link on which the user is currently on 
          disabled: true,
          // href: 'breadcrumbs_link_3',
        },
      ],
    }),
  }
</script>