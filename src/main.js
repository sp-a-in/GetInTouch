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
  render: h => h(App)
}).$mount('#app')
