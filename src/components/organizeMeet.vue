<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-2 grey--text lighten-5" >Create a new Meetup</h1>
          <form @submit.prevent="onSubmit">
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
                <v-btn class="primary" type="submit">Create</v-btn>
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
    }
  },
  methods:{
    onSubmit(){
      let payLoad = {
        id: 'dkjfghsdf23',
        title: this.title,
        location: this.location,
        url: this.imageUrl,
        description: this.description,
        date: new Date(),
      };
      this.$store.dispatch('createMeetup',payLoad);
    }
  }
}
</script>

<style>

</style>