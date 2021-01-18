<template>
  <v-container>

    <v-row v-if="mostRecentEvent">
      <v-col cols="12">
        Most recent event: <Time :time="mostRecentEvent.received" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Source
                </th>
                <th class="text-left">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="a in alive" :key="a[0]" >
                <td class="text-left">{{a[0]}}</td>
                <td class="text-left"><Time :time="a[1]" format="time-caption" /></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

  </v-container>
</template>


<script>
  import Time from '@/components/Time';
  export default {
    components: {
      Time,
    },
    computed: {
      mostRecentEvent() { return this.$store.getters.mostRecentEvent; },
      alive() {
        let s = this.$store.getters.alive;
        return Object.keys(s).map((key) => [key, s[key]]).sort( (a,b) => (a[0] < b[0] ? -1 : 1) );
      }
    },
  };
</script>

