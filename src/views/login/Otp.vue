<template>
  <v-container fill-height fluid>

    <v-row align="center" justify="center">
      <v-col cols=1 />
      <v-col cols=10 class="d-flex flex-column" >
        <div class="mb-4 font-weight-light">We have emailed you a PIN code. Please enter this below.</div>
        <v-form v-model="validForm">
          <div>
            <v-text-field placeholder="123456" v-model="otp" :rules="otpRules" ></v-text-field>
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
    otp: null,
    welcome: true,
    otpRules: [
      v => /^\d{6}$/.test(v)
    ],
  }),
  methods: {
    submit() { this.$store.dispatch('setOtp', this.otp); },
  }
};
</script>
