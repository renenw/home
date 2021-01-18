<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-icon dense>mdi-home</v-icon>
      {{caption}}
    </template>
    <span>{{source}}</span>
  </v-tooltip>
</template>

<script>
// import SearchBox from '@/components/SearchBox';
// import HeaderBarRoutes from '@/components/HeaderBarRoutes';
export default {
  props: ['source'],
  computed: {
    caption() {
      let caption = this.source;
      switch (this.source) {
        case 'driveway_gate_alive': caption = 'Driveway Gate'; break
        case 'electricity_total': caption = 'Electricity (Total)'; break;
        case 'front_gate_alive': caption = 'Front Gate Keypad'; break
        case 'iot-relay': caption = 'IOT Relay'; break
        case 'ping_af_south_1': caption = 'Network (Cape Town)'; break
        case 'ping_eu_west_1': caption = 'Network (Dublin)'; break
        case 'ping_us_east_1': caption = 'Network (Virginia)'; break
        case 'rain_gauge_alive': caption = 'Rain Guage'; break
        case 'switcher_alive': caption = 'Irrigation'; break
        case 'temperature_outside': caption = 'Temperature (Outside)'; break
        case 'temperature_pool_alive': caption = 'Temperature (Pool)'; break
      }
      return caption;
    }
  }
};
</script>
