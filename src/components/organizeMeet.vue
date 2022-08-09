<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-2 grey--text lighten-5" >Create a new Meetup</h1>
          <form @submit.prevent="onSubmit">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="title"
                      label="Title"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="location"
                      label="Location"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="imageUrl"
                      label="Image URL"
                      required
                    ></v-text-field>
                    <img :src="imageUrl" height="150px">
                    <v-textarea
                      v-model="description"
                      label="Description"
                      multi-line
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h4 class="grey--text lighten-5">Choose a Date and Time.</h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-date-picker v-model="date"></v-date-picker>
                  </v-col>
                  <v-col>
                    <v-time-picker
                      v-model="time"
                      format="24hr"
                      scrollable
                      class="d-flex flex-row-reverse"
                    ></v-time-picker>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn class="primary" type="submit" mb-4 :disabled="!isEnabled">Create</v-btn>
                  </v-col>
                </v-row>
          </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: null,
      time: null,
    }
  },
  computed:{
    isEnabled(){
      if(this.title && this.location && this.imageUrl && this.description && this.date && this.time)
      {
        return true;
      }
      return false;
    },
    computedDateTime(){
      const date = new Date(this.date);
      if(typeof this.time === 'string')
      {
        let stdTime = this.time.split(":");
        date.setHours(stdTime[0]);
        date.setMinutes(stdTime[1]);
      }
      return date;
    },
  },
  methods:{
    onSubmit(){
      let payLoad = {
        id: 'dkjfghsdf23',
        title: this.title,
        location: this.location,
        url: this.imageUrl,
        description: this.description,
        date: this.computedDateTime,
      };
      this.$store.dispatch('createMeetup',payLoad);
      this.$router.push('/view-meetups');
    }
  }
}
</script>

<style>

</style>