<template>
  <v-container>

    <v-row>
      <v-col cols="12">
        <v-slider
          v-model="runDurationSeconds"
          label="Run For"
          thumb-color="primary"
          thumb-label="always"
          min="30"
          max="1200"
        >
          <template v-slot:thumb-label="{ value }">
            {{ runDurationLabel }}
          </template>
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="flex-wrap">
        <v-btn v-for="switchDefinition in sortedSwitches" :key="switchDefinition[1]" class="mr-1 mb-1" small color="primary" @click="switchIrrigationOn(switchDefinition[1])">
          {{switchDefinition[0]}}
        </v-btn>
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
    data: () => ({
      runDurationSeconds: 180,
      switches: {
        "pond_ferns":      6,
        "front_misters":   2,
        "front":           1,
        "front_fynbos":    0,
        "outhouse_lawn":   14,
        "driveway":        12,
        "vegetable_patch": 13,
        "jungle_gym":      15,
        "pool_beds":       5,
        "pool_lawn":       7,
        "pool":            8,
        "front_lawn":      3,
        "trees":           4
      }
    }),
    computed: {
      runDurationLabel() {
        const minutes = Math.floor(this.runDurationSeconds / 60);
        const seconds = this.runDurationSeconds % 60;
        return `${minutes}:${seconds}`;
      },
      sortedSwitches() {
        let s = this.switches;
        return Object.keys(s).map((key) => [key, s[key]]).sort( (a,b) => (a[0] < b[0] ? -1 : 1) );
      }
    },
    methods: {
      switchIrrigationOn(switchId) {
        this.$store.dispatch('triggerAction', { action: 'switchIrrigationOn', payload: { switchId: switchId, duration_s: this.runDurationSeconds } });
      },
    },
  };
</script>

