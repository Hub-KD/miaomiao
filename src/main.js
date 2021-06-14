import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroll from '@/components/Scroll'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component('Scroll', Scroll)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')