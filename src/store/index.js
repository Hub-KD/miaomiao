import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isFootShow: true,
        comlist: []
    },
    mutations: {
        hideFoot(state, data) {
            state.isFootShow = data
        },
        showFoot() {
            state.isFootShow = data
        },
        setComList(state, data) {
            state.comlist = data;
            console.log(state.comlist)
        }
    },
    actions: {
        getComList(store) {
            axios.get("/ajax/comingList?ci=10&token=&limit=10").then((res) => {
                // console.log(res.data);
                store.commit('setComList', res.data.coming)
            });
        }
    },
    modules: {}
})