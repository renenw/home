<template>
  <v-app-bar dense app color="info">

    <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" icon small color="white" :to="{name: 'Live'}" v-bind="attrs" v-on="on" >
            <v-icon dense>mdi-credit-card-outline</v-icon>
          </v-btn>
        </template>
        <span>Card Management</span>
      </v-tooltip>


  </v-app-bar>
</template>

<script>
// import SearchBox from '@/components/SearchBox';
// import HeaderBarRoutes from '@/components/HeaderBarRoutes';
// export default {
//   components: {
//     SearchBox,
//     HeaderBarRoutes,
//   },
//   props: ['displaySearchOnRoutes'],
//   computed: {
//     loggedInAndLive() { return this.$store.getters.venueId!==null; },
//   },
// };
</script>
