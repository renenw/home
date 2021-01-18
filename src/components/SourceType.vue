<template>
  <span>{{caption}}</span>
</template>

<script>
import EventInterpreter from '@/store/EventInterpreter';
// import SearchBox from '@/components/SearchBox';
// import HeaderBarRoutes from '@/components/HeaderBarRoutes';

export default {
  props: ['event'],
  computed: {
    caption() {
      let e = new EventInterpreter(this.event);
      return e.caption();
    }
  }
};
</script>
