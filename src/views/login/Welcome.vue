<template>
  <v-container fill-height fluid>

    <v-row align="center" justify="center">
      <v-col cols=1 />
      <v-col cols=10 v-if="welcome" class="d-flex flex-column" >
        <v-form class="mt-0 pt-0" v-model="validForm">
          <div>
            <v-text-field placeholder="you@example.com" v-model="email" :rules="emailRules" ></v-text-field>
          </div>
          <div align="right">
            <v-btn type="submit" @click="submit" :disabled="!validForm">
              Go
            </v-btn>
          </div>
        </v-form>
      </v-col>
      <v-col cols=1 />
    </v-row>

  </v-container>
</template>

<script>

export default {
  data: () => ({
    validForm: false,
    email: null,
    welcome: true,
    emailRules: [
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
    ],
  }),
  methods: {
    submit() { this.$store.dispatch('setEmail', this.email); },
  }
};
</script>
