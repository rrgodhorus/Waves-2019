import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import contactUs from './views/contactUs.vue'
import Event from './views/Event.vue'
import Developer from './views/Developer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/developer',
      name: 'Developer',
      component: Developer
    }
  ]
})
