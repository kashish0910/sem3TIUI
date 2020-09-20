<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
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
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Health Insurance',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Lifeline Health Insurance',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
        {
          text: 'Lifeline Health Insurance',
          disabled: true,
          href: 'breadcrumbs_link_3',
        },
      ],
    }),
  }
</script>