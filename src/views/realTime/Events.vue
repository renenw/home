<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            When
          </th>
          <th class="text-left">
            What
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
          <td><Time :time="event.received" format="time-caption" /></td>
          <td><SourceType :event="event" /></td>
          <td><Source :source="event.source" /></td>
          <td class="text-left">{{JSON.stringify(event.payload)}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
  import Time from '@/components/Time';
  import SourceType from '@/components/SourceType';
  import Source from '@/components/Source';
  export default {
    components: {
      Time,
      SourceType,
      Source,
    },
    computed: {
      events() { return this.$store.getters.recentEvents; },
    },
  };
</script>

