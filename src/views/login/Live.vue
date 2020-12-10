<template>
  <transition>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>


<script>
  import Pusher from 'pusher-js'
  const pusher = new Pusher('4d294dd3e5a0ee1aa876', { cluster: 'eu', encrypted: true });
  export default {
    computed: {
      pubSubChannelId() { return this.$store.getters.pubSubChannelId; },
    },
    created() {
      let channel = pusher.subscribe(this.pubSubChannelId);
      channel.bind('event', data => { this.$store.dispatch('newEvent', data['message']); });
    },
  };
</script>
