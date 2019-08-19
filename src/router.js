import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import Developers from './views/Developers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/event',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: Contact
    },
    {
      path: '/developer',
      name: 'Developers',
      component: Developers
    },
    {
      path: '*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
