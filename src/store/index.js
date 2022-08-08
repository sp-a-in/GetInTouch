import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store(
    {
        state: {
            allMeetups : [
                {
                  id : 'jhsfgjhsg4',
                  title : 'Spiderman',
                  url : 'https://c4.wallpaperflare.com/wallpaper/907/35/593/spiderman-hd-4k-5k-wallpaper-preview.jpg',
                  date : '21st March 2022'
                },
                {
                  id : 'bfbdkfnj5',
                  title : 'Batman',
                  url : 'https://www.wallpapersshare.com/img/big/batman-superhero-ultra-hd-4k-wallpaper.jpg',
                  date : '2nd July 2023' 
                },
              ],
              user : [
                {
                    userId: 'fjgjdgfgigj24',
                    resgisteredmeetups: [4,],
                }
              ]
        },
        actions: {},
        mutations: {},
        getters: {
            allMeetups(state){
                return state.allMeetups;
            },
            featuredMeetups(state, getters){
                return getters.allMeetups.slice(0,5);              
            },
            loadedMeetup(state){
                return (meetupId) => {
                    return state.allMeetups.find((meetup) => {
                         return meetup.id === meetupId;
                    });
                }
            }
        },
    }
);