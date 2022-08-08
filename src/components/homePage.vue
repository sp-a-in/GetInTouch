<template>
<div>
  <v-row
    align="center"
    justify="space-around"
  >
 <v-btn
 class="mt-8"
      depressed
      color="primary"
    >
      Primary
    </v-btn>
     <v-btn
     class="mt-8"
      depressed
      color="primary"
    >
      Primary
    </v-btn>
  </v-row>
  <v-row    
    align="center"
    justify="space-around">
    <v-col cols="8">
     <v-carousel v-model="model" class="mt-8">
    <v-carousel-item
      v-for="item in allMeetup"
      :key="item.id"
      :src="item.url"
      @click="onClick(item.id)"
    >
      <div class="title" >
        <router-link to="'/view-meetups/'+ item.id">{{item.title}}</router-link>
      </div>
    </v-carousel-item>
  </v-carousel>
  </v-col>
  </v-row>
</div>
</template>
<script>
  export default {
    data: () => ({
      model: 0,
      items: [
        {
          id : 3,
          title : 'Spiderman',
          url : 'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
          id : 4,
          title : 'Batman',
          url : 'https://www.wallpapersshare.com/img/big/batman-superhero-ultra-hd-4k-wallpaper.jpg',
        },
      ],
    }),
    methods:{
      onClick(id){
        this.$router.push({path:'/view-meetups/'+id}).catch(err => {
    // Ignore the vuex err regarding  navigating to the page they are already on.
    if (
      err.name !== 'NavigationDuplicated' &&
      !err.message.includes('Avoided redundant navigation to current location')
    ) {
      // But print any other errors to the console
      console.log(err);
    }
  });
      }
    },
    computed:{
      allMeetup(){
        return this.$store.getters.allMeetups;
      }
    },
  }
</script>
<style scoped>

.title{
  position: absolute;
  bottom: 50px;
  padding-left: 50%;
}
</style>