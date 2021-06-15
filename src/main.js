import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroll from '@/components/Scroll'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component('Scroll', Scroll)
Vue.use(MintUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')