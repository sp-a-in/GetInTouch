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
                  location: 'Banglore',
                  date : new Date(),
                  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius eveniet enim? Nesciunt qui laborum rerum? Dicta nemo beatae reprehenderit tempore, eius autem ipsa, magnam porro id asperiores in accusamus obcaecati excepturi, minus iste pariatur facere voluptatum fugiat voluptates eaque quo. Esse repellat, distinctio atque repellendus deserunt autem vitae laborum officiis nulla cum, perspiciatis quod voluptas fugiat et suscipit sapiente facere a aliquam temporibus iure. Modi, assumenda mollitia. Recusandae iure sed saepe nesciunt dignissimos error labore, quos doloremque consectetur at quae voluptatem. Mollitia in voluptates aliquam, est error velit at consequatur assumenda ea sit quos pariatur molestiae possimus eos! Molestiae soluta provident quasi, quia harum nemo error dolorum modi cumque pariatur quos obcaecati accusamus maiores dignissimos numquam quod perspiciatis voluptate minus voluptates asperiores? Porro reiciendis maxime dolorem sint perspiciatis, quod temporibus ab perferendis, recusandae facilis corrupti aut dolore doloremque delectus dolorum quas cum doloribus repudiandae tenetur officia! Voluptas exercitationem ipsa nisi culpa inventore asperiores, deleniti assumenda labore? Velit blanditiis in quibusdam sunt mollitia? Saepe sapiente ullam fuga natus labore mollitia quae cupiditate eligendi repellat consectetur! Maxime cumque eligendi excepturi. Quo ea rem quam dolor, incidunt veniam aspernatur dignissimos cupiditate. At earum, facilis reprehenderit culpa similique accusamus quisquam cupiditate repudiandae expedita.'
                },
                {
                  id : 'bfbdkfnj5',
                  title : 'Batman',
                  url : 'https://www.wallpapersshare.com/img/big/batman-superhero-ultra-hd-4k-wallpaper.jpg',
                  location: 'Sheopur',
                  date : new Date(),
                  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius eveniet enim? Nesciunt qui laborum rerum? Dicta nemo beatae reprehenderit tempore, eius autem ipsa, magnam porro id asperiores in accusamus obcaecati excepturi, minus iste pariatur facere voluptatum fugiat voluptates eaque quo. Esse repellat, distinctio atque repellendus deserunt autem vitae laborum officiis nulla cum, perspiciatis quod voluptas fugiat et suscipit sapiente facere a aliquam temporibus iure. Modi, assumenda mollitia. Recusandae iure sed saepe nesciunt dignissimos error labore, quos doloremque consectetur at quae voluptatem. Mollitia in voluptates aliquam, est error velit at consequatur assumenda ea sit quos pariatur molestiae possimus eos! Molestiae soluta provident quasi, quia harum nemo error dolorum modi cumque pariatur quos obcaecati accusamus maiores dignissimos numquam quod perspiciatis voluptate minus voluptates asperiores? Porro reiciendis maxime dolorem sint perspiciatis, quod temporibus ab perferendis, recusandae facilis corrupti aut dolore doloremque delectus dolorum quas cum doloribus repudiandae tenetur officia! Voluptas exercitationem ipsa nisi culpa inventore asperiores, deleniti assumenda labore? Velit blanditiis in quibusdam sunt mollitia? Saepe sapiente ullam fuga natus labore mollitia quae cupiditate eligendi repellat consectetur! Maxime cumque eligendi excepturi. Quo ea rem quam dolor, incidunt veniam aspernatur dignissimos cupiditate. At earum, facilis reprehenderit culpa similique accusamus quisquam cupiditate repudiandae expedita.'
                },
              ],
              user : [
                {
                    userId: 'fjgjdgfgigj24',
                    resgisteredmeetups: [4,],
                }
              ]
        },
        mutations: {
            createMeetup(state, payload){
                state.allMeetups.push(payload);
            }
        },
        actions: {
            createMeetup({commit}, payload){
                commit('createMeetup', payload);
            }
        },
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