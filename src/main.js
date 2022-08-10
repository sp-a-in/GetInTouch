import Vue from 'vue';
import App from './App.vue';
import profilePage from './components/profilePage.vue';
import ViewMeetup from './components/viewMeetup.vue';
import signIn from './components/signIn.vue';
import signUp from './components/signUp.vue';
import organizeMeet from './components/organizeMeet.vue';
import homePage from './components/homePage.vue';
import myMeet from './components/myMeet.vue';
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueRouter from 'vue-router';
import {store} from './store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import DateTimeFilter from './date.js';
// import myFirstPlugin from './myFirstPlugin';
// import myFirstPlugin from './myFirstPlugin';

// Vue.use(myFirstPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false    
Vue.filter('date', DateTimeFilter);
const route = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/view-meetups/:id',
    component: myMeet,
    props: true,
  },
  {
    path: '/view-meetups',
    component: ViewMeetup,
  },
  {
    path: '/profile-page',
    component: profilePage,
  },
  {
    path: '/organize-meet',
    component: organizeMeet,
  },
  {
    path: '/sign-in',
    component: signIn,
  },
  {
    path: '/sign-up',
    component: signUp,
  },
];

const router = new VueRouter({routes: route});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
        apiKey: "AIzaSyDG3t7sGWuBBVp_cu5JAnNikMu2OioLtz4",
        authDomain: "vue-meet-2b3d6.firebaseapp.com",
        projectId: "vue-meet-2b3d6",
        storageBucket: "vue-meet-2b3d6.appspot.com",
        messagingSenderId: "169183787893",
        appId: "1:169183787893:web:79284f7d4802cfe7bd713c",
        measurementId: "G-MBQ2L9KCPH"
    });
  }
}).$mount('#app')



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDG3t7sGWuBBVp_cu5JAnNikMu2OioLtz4",
//   authDomain: "vue-meet-2b3d6.firebaseapp.com",
//   projectId: "vue-meet-2b3d6",
//   storageBucket: "vue-meet-2b3d6.appspot.com",
//   messagingSenderId: "169183787893",
//   appId: "1:169183787893:web:79284f7d4802cfe7bd713c",
//   measurementId: "G-MBQ2L9KCPH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);