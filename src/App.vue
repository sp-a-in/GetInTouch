<template>
  <v-app>
<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
   <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-for="item in functionality" :key="item.id"
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item  router :to="item.link">
            <v-list-item-action><v-icon>{{item.icon}}</v-icon></v-list-item-action>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link :to="linkLogo">
          getInTouch
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-for="item in functionality" :key="item.id">
        <v-btn icon router :to="item.link">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
  </v-card>
  <v-main>
  <router-view></router-view>
  </v-main>
    
</template>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      linkLogo: '/',
      group: null,
      functionality:[
        { 
          icon: 'supervisor_account',
          name: 'View Meetups',
          link: 'view-meetups'
        },
        { 
          icon: 'room',
          name: 'Organize Meetup',
          link: 'organize-meet'
        },
        { 
          icon: 'person',
          name: 'Profile',
          link: 'profile-page'
        },
        { 
          icon: 'face',
          name: 'Sign Up',
          link: 'sign-up'
        },
        { 
          icon: 'lock_open',
          name: 'Sign In',
          link: 'sign-in'
        },                        
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
.v-application a{
  text-decoration: none;
}
</style>
