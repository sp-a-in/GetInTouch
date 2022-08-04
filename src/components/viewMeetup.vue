<template>
  <v-container>
    <v-row>
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
                  <v-img :src="'https://cdn.vuetifyjs.com/images/cards/road.jpg'" class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <v-card-title class="text-h5">
                  <div>
                    <h5>My First Meetup</h5>
                    <div>31st July 2022</div>
                  </div>
                </v-card-title>
                      <v-btn
                        color="orange"
                        text
                        class="text-decoration-underline"
                        to = "view-meetups/1"
                       >
                        Detailse
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

}
</script>

<style>
.v-avatar{
  width: -webkit-fill-available !important;
}
</style>