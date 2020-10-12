import Vue from 'vue';
import App from './App.vue';
//import VueRouter from "vue-router";
import router from './router';
import $ from 'jquery';
import VueMoment from 'vue-moment'

import './assets/css/styles.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  $,
  VueMoment
}).$mount("#app");
