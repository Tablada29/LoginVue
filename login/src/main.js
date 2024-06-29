import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // aquí se importa
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  VueSweetalert2,
  render: h => h(App)
}).$mount('#app')
