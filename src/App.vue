<template>
  <v-app :style="{background: '#F5F5F5'}">

    <HeaderBar v-if="live" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <Welcome v-if="userState=='logged_out'" />
      <Otp v-if="userState=='otp'" />
      <Initialising v-if="userState=='initiailising'" />
      <Live v-if="live" />
    </v-main>

    <v-footer v-if="live" app>
      <!-- -->
    </v-footer>

  </v-app>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
  import HeaderBar from '@/components/HeaderBar';
  import Welcome from '@/views/login/Welcome';
  import Otp from '@/views/login/Otp'
  import Initialising from '@/views/login/Initialising'
  import Live from '@/views/login/Live'

  export default {
    name: 'App',

    components: {
      HeaderBar,
      Welcome,
      Otp,
      Initialising,
      Live,
    },

    data: () => ({}),

    computed: {
      userState() {
        let s = 'logged_out';
        if (this.$store.getters.email) {
          s = 'otp';
          if (this.$store.getters.otp) {
            s = 'initiailising';
            if (this.$store.getters.apiKey) {
              s = 'live';
            }
          }
        }
        return s;
      },
      live() { return (this.userState=='live'); },
    },

  };
</script>
