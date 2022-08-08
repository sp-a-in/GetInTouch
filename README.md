# GetInTouch
This is a meetup-App
Day - 8 Learnings---------------------------------
    1. @submit.prevent = "onSubmit"
    2. this.$store.dispatch('createMeetup', payload) ----> createMeetup action catches it.
    3. this.$store.commit('createMeetup', payload) -----------> createMeetup mutation catches it.
actions: {
            createMeetup({commit}, payload){
                console.log("Actionsa");
                commit('createMeetup', payload);
            }
        },
        
mutations: {
  createMeetup(state, payload){
      console.log("Worked");
      state.allMeetups.push(payload);
  }
},
