<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            When
          </th>
          <th class="text-left">
            Source
          </th>
          <th class="text-left">
            Payload
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.uid" >
          <Time :time="event.received" />
          <td class="text-left">{{event.source}}</td>
          <td class="text-left">{{JSON.stringify(event.payload)}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
  import Time from '@/components/Time';
  export default {
    components: {
      Time,
    },
    computed: {
      events() { return this.$store.getters.recentEvents; },
    },
  };
</script>

