import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlagin from './coman/message.plagin'
import Loader from './components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlagin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyDpR-iUwF15CaYTFlbXizrG_mzfRO9pHbg",
  authDomain: "vuecrm-9f88c.firebaseapp.com",
  databaseURL: "https://vuecrm-9f88c.firebaseio.com",
  projectId: "vuecrm-9f88c",
  storageBucket: "vuecrm-9f88c.appspot.com",
  messagingSenderId: "956185361960",
  appId: "1:956185361960:web:12c6ab5c3981e4fe757f1d"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }  
})
// Initialize Firebase
