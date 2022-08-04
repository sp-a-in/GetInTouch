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
      v-for="item in items"
      :key="item.id"
      :src="item.url"
    >
      <div class="title" >
        <router-link to="/view-meetups/item.id">{{item.title}}</router-link>
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
          title : 'Spiderman',
          url : 'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
        },
        {
          title : 'Batman',
          url : 'https://www.wallpapersshare.com/img/big/batman-superhero-ultra-hd-4k-wallpaper.jpg',
        },
      ],
    }),
  }
</script>
<style scoped>

.title{
  position: absolute;
  bottom: 50px;
  padding-left: 50%;
}
</style>