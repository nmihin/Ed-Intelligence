import Vue from 'vue';
import App from './App.vue';
//import VueRouter from "vue-router";
import router from './router';
import $ from 'jquery';
import VueMoment from 'vue-moment'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

import './assets/css/styles.css';
//import './assets/css/bootstrap-datetimepicker.min.css';
//import './assets/css/bootstrap-glyphicons.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap.min.css';
//import './assets/css/pmd-datetimepicker.css';
import './assets/css/swiper.min.css';

//import './assets/js/bootstrap-datetimepicker.min.js';
import './assets/js/swiper.min.js';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  $,
  VueMoment
}).$mount("#app");
