import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import EventInterpreter from '@/store/EventInterpreter';

Vue.use(Vuex)

import { appState } from '@/plugins/stateWatcher';

export default new Vuex.Store({
  state: {
    // email: 'renen@121.co.za',
    // otp: 'xxx',
    // apiKey: 'c2c30289-192a-42a3-a360-645158ef8795',
    // customerName: 'Investec',
    // rules: [{"id":7,"ruleSetId":7,"name":"Woolworths","minimumAmount":null,"maximumAmount":"0.5e3","currency":null,"ruleAppliesOnlyToMerchantRegex":"Wool","ruleDoesntApplyToMerchantRegex":null,"allowedMerchantNameRegex":null,"blockedMerchantNameRegex":null,"allowedCategories":null,"blockedCategories":null,"allowedCities":null,"blockedCities":null,"country":null},{"id":8,"ruleSetId":7,"name":"Pick n Pay","minimumAmount":null,"maximumAmount":"0.3e3","currency":null,"ruleAppliesOnlyToMerchantRegex":"Pick","ruleDoesntApplyToMerchantRegex":null,"allowedMerchantNameRegex":null,"blockedMerchantNameRegex":null,"allowedCategories":null,"blockedCategories":null,"allowedCities":null,"blockedCities":null,"country":null},{"id":9,"ruleSetId":7,"name":"Max for non-food retailers","minimumAmount":null,"maximumAmount":"0.15e3","currency":null,"ruleAppliesOnlyToMerchantRegex":null,"ruleDoesntApplyToMerchantRegex":"Pick|Wool","allowedMerchantNameRegex":null,"blockedMerchantNameRegex":null,"allowedCategories":null,"blockedCategories":null,"allowedCities":null,"blockedCities":null,"country":null},{"id":10,"ruleSetId":7,"name":"Mavericks","minimumAmount":null,"maximumAmount":null,"currency":null,"ruleAppliesOnlyToMerchantRegex":null,"ruleDoesntApplyToMerchantRegex":null,"allowedMerchantNameRegex":null,"blockedMerchantNameRegex":"Mavericks","allowedCategories":null,"blockedCategories":null,"allowedCities":null,"blockedCities":null,"country":null},{"id":11,"ruleSetId":7,"name":"No Booze","minimumAmount":null,"maximumAmount":null,"currency":null,"ruleAppliesOnlyToMerchantRegex":null,"ruleDoesntApplyToMerchantRegex":null,"allowedMerchantNameRegex":null,"blockedMerchantNameRegex":null,"allowedCategories":null,"blockedCategories":"[\"liquor\", \"booze\"]","allowedCities":null,"blockedCities":null,"country":null}],
    // cards: [{"id":7,"investecAccountNumber":"10010159833","cardHolderName":"SE Watermeyer"},{"id":8,"investecAccountNumber":"10010161215","cardHolderName":"JE Smith"},{"id":9,"investecAccountNumber":"10010161215","cardHolderName":"JE Smith2"},{"id":10,"investecAccountNumber":"10010161215","cardHolderName":"R Watermeyer2"},{"id":11,"investecAccountNumber":"10010161215","cardHolderName":"R Watermeyer23"}],
    // ruleSets: [{"id":7,"name":"Pocket Money Rules"}],

    email: null,
    otp: null,
    apiKey: null,
    pubSubChannelId: null,

    mostRecentEvent: null,
    events: [],
    alive: {},

    lastAction: null,

  },
  mutations: {
    logout(state) {
      state.email= null;
      state.apiKey = null;
    },
    setEmail(state, email) { state.email = email; },
    setOtp(state, otp) { state.otp = otp; },
    setAuth(state, data) {
      state.otp = null;
      state.apiKey = data['apiKey'];
      state.pubSubChannelId = data['channel'];
    },

    newEvent(state, event) {
      const e = new EventInterpreter(this.event);
      state.mostRecentEvent = e;
      state.alive[event.source] = event.received;
      state.events.unshift(event);
      state.events = state.events.slice(0,100);
    },

    triggerAction(state, action) { state.lastAction = action; }

  },
  actions: {
    logout(context) { context.commit('logout'); },
    setEmail(context, email) { context.commit('setEmail', email); },
    setOtp(context, otp) { context.commit('setOtp', otp); },
    newEvent(context, event) { context.commit('newEvent', event); },
    triggerAction(context, action) { context.commit('triggerAction', action); }
  },
  getters: {
    email(state) { return state.email; },
    otp(state) { return state.otp; },
    apiKey(state) { return state.apiKey; },
    pubSubChannelId(state) { return state.pubSubChannelId; },

    mostRecentEvent(state) { return state.mostRecentEvent; },
    recentEvents(state) { return state.events.slice(0,20); },
    alive(state) { return state.alive; },
    
  },
  modules: {},
  plugins: [ appState, createPersistedState({ filter: mutation => (mutation!=='newEvent') }) ],
});