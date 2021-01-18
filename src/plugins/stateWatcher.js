// import { api } from '@/plugins/api';

const appState = store => {
   
  store.subscribe( ( mutation, state ) => {

    if (mutation.type=='setEmail') {
      fetch(apiUrl(`otp?email=${mutation.payload}`));
    }

    if (mutation.type=='setOtp') {
      fetch(apiUrl(`auth?email=${state.email}&otp=${mutation.payload}`)).then(response => response.json()).then(json => {store.commit('setAuth', json) });
    }

    if (mutation.type=='triggerAction') { postMutation(state, mutation); }


    function postMutation(state, mutation) {
        console.log(mutation);
        fetch(`${baseURL}action?e=${state.email}&k=${state.apiKey}`, {
          method: 'POST',
          body: JSON.stringify(mutation['payload'])
        });
    }

    // // if (mutation.type=='setCustomerName') {
    //   // let key = state.apiKey;
    // if ((mutation.type=='setAuth') && (mutation.payload) && (mutation.payload['apiKey']) ) {
    //   let key = mutation.payload['apiKey'];
    //   fetch(apiUrl(`ruleSets?apiKey=${key}`)).then(response => response.json()).then(json => {store.commit('setRuleSets', json) });
    //   fetch(apiUrl(`cards?apiKey=${key}`)).then(response => response.json()).then(json => {store.commit('setCards', json) });
    //   fetch(apiUrl(`rules?apiKey=${key}`)).then(response => response.json()).then(json => {store.commit('setRules', json) });
    //   fetch(apiUrl(`transactions?apiKey=${key}`)).then(response => response.json()).then(json => {store.commit('setTransactions', json) });
    //   fetch(apiUrl(`cardRuleSets?apiKey=${key}`)).then(response => response.json()).then(json => {store.commit('setCardRuleSets', json) });
    // }

    // if (mutation.type=='setCustomerName') {
    //   fetch(apiUrl(`updateCustomer?apiKey=${state.apiKey}&customerName=${mutation.payload}`));
    // }
    // if (mutation.type=='setPostUrl') {
    //   fetch(apiUrl(`updateCustomer?apiKey=${state.apiKey}&postUrl=${mutation.payload}`));
    // }
    // if (mutation.type=='setSlackUrl') {
    //   fetch(apiUrl(`updateCustomer?apiKey=${state.apiKey}&slackUrl=${mutation.payload}`));
    // }

    // if (mutation.type=='newRule') {
    //   fetch(apiUrl(`newRule?apiKey=${state.apiKey}&${new URLSearchParams(mutation.payload).toString()}`)).then(response => response.json()).then(json => {store.commit('addRule', json['id']) });
    // }

    // if (mutation.type=='newCard') {
    //   fetch(apiUrl(`newCard?apiKey=${state.apiKey}&${new URLSearchParams(mutation.payload).toString()}`)).then(response => response.json()).then(json => {store.commit('addCard', json['id']) });
    // }

    // if (mutation.type=='newRuleSet') {
    //   fetch(apiUrl(`newRuleSet?apiKey=${state.apiKey}&${new URLSearchParams(mutation.payload).toString()}`)).then(response => response.json()).then(json => {store.commit('addRuleSet', json['id']) });
    // }

    // if (mutation.type=='updateCardRuleSets') {
    //   fetch(apiUrl(`updateCardRuleSets?apiKey=${state.apiKey}&${new URLSearchParams(mutation.payload).toString()}`)); 
    // }

    // if (mutation.type=='setCurrentTransactionId') {
    //   fetch(apiUrl(`checks?apiKey=${state.apiKey}&transactionId=${state.currentTransactionId}`)).then(response => response.json()).then(json => {store.commit('setCurrentChecks', json)});
    // }

  });


  const baseURL = 'https://gu9emj1zxd.execute-api.eu-west-1.amazonaws.com/Prod/'

  const apiUrl = function(apiCall) {
    return `${baseURL}${apiCall}`;
  }

}

export { appState };