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
                    <v-card-subtitle class="primary--text"><h3>{{selectedMeet.date}} - Banglore</h3></v-card-subtitle>
                    <v-card-text><h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius eveniet enim? Nesciunt qui laborum rerum? Dicta nemo beatae reprehenderit tempore, eius autem ipsa, magnam porro id asperiores in accusamus obcaecati excepturi, minus iste pariatur facere voluptatum fugiat voluptates eaque quo. Esse repellat, distinctio atque repellendus deserunt autem vitae laborum officiis nulla cum, perspiciatis quod voluptas fugiat et suscipit sapiente facere a aliquam temporibus iure. Modi, assumenda mollitia. Recusandae iure sed saepe nesciunt dignissimos error labore, quos doloremque consectetur at quae voluptatem. Mollitia in voluptates aliquam, est error velit at consequatur assumenda ea sit quos pariatur molestiae possimus eos! Molestiae soluta provident quasi, quia harum nemo error dolorum modi cumque pariatur quos obcaecati accusamus maiores dignissimos numquam quod perspiciatis voluptate minus voluptates asperiores? Porro reiciendis maxime dolorem sint perspiciatis, quod temporibus ab perferendis, recusandae facilis corrupti aut dolore doloremque delectus dolorum quas cum doloribus repudiandae tenetur officia! Voluptas exercitationem ipsa nisi culpa inventore asperiores, deleniti assumenda labore? Velit blanditiis in quibusdam sunt mollitia? Saepe sapiente ullam fuga natus labore mollitia quae cupiditate eligendi repellat consectetur! Maxime cumque eligendi excepturi. Quo ea rem quam dolor, incidunt veniam aspernatur dignissimos cupiditate. At earum, facilis reprehenderit culpa similique accusamus quisquam cupiditate repudiandae expedita.</h4></v-card-text>
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