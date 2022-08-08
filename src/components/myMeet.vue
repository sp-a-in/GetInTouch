<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="brown--text">
                        {{selectedMeet.title}}
                    </v-card-title>
                    <v-img  :src="selectedMeet.url"
                    height="500px">
                    </v-img>
                    <v-card-subtitle class="primary--text"><h3>{{selectedMeet.date}} - {{selectedMeet.location}}</h3></v-card-subtitle>
                    <v-card-text><h4>{{selectedMeet.description}}</h4></v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="red white--text" mb2>Register</v-btn></v-card-actions>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed:{
        selectedMeet(){
            return this.$store.getters.loadedMeetup(this.id);
        }
    },
}
</script>

<style>

</style>