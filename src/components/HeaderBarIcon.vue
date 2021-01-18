<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="mx-2" icon small color="white" :to="{name: to}" v-bind="attrs" v-on="on" >
        <v-icon dense>{{icon}}</v-icon>
      </v-btn>
    </template>
    <span>{{tooltip}}</span>
  </v-tooltip>
</template>

<script>
// import SearchBox from '@/components/SearchBox';
// import HeaderBarRoutes from '@/components/HeaderBarRoutes';
export default {
  props: ['icon', 'tooltip', 'to'],
};
</script>
