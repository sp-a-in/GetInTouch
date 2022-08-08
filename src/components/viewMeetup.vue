<template>
  <v-container>
    <v-row v-for="item in allMeetup" :key="item.id">
      <v-col xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col cols="6">
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.url" class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <v-card-title class="text-h5">
                  <div>
                    <h5>{{item.title}}</h5>
                    <div>{{item.date}}</div>
                  </div>
                </v-card-title>
                      <v-btn
                        color="orange"
                        text
                        class="text-decoration-underline"
                        :to = "'/view-meetups/' + item.id"
                       >
                        Details                 
                      </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
computed:{
    allMeetup(){
      return this.$store.getters.allMeetups;
    }
    },
}
</script>

<style>
.v-avatar{
  width: -webkit-fill-available !important;
}
</style>