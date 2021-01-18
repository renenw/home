import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
