import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import movie from './movie'
import mine from './mine'
import detail from './detail'


Vue.use(VueRouter)

const routes = [
    Home,
    movie,
    mine,
    detail,
    {
        path: '',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

// {
//       path: '/',
//       name: 'Home',
//       component: Home
//   },
//   {
//       path: '/about',
//       name: 'About',
//       route level code - splitting
//       this generates a separate chunk(about.[hash].js) for this route
//       which is lazy - loaded when the route is visited.
//       component: () =>
//           import ( /* webpackChunkName: "about" */ '../views/About.vue')
//   }