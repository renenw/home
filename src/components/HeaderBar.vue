<template>
  <v-app-bar dense app color="info">

    <v-menu bottom left >
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on" >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item dense>
          <v-list-item-title @click="logout">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>
      <HeaderBarIcon icon="mdi-watering-can-outline" tooltip="Irrigation" to="Irrigation" />
      <HeaderBarIcon icon="mdi-history" tooltip="Event History" to="Events" />
      <HeaderBarIcon icon="mdi-home" tooltip="Home" to="Statuses" />
  </v-app-bar>

</template>

<script>
import HeaderBarIcon from '@/components/HeaderBarIcon';
export default {
  components: {
    HeaderBarIcon,
  },
  methods: {
    logout() { this.$store.dispatch('logout'); },
  }
};
</script>
