import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    links: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'Events',
        href: '#events'
      }
    ]
  },
  getters: {
    links: (state, getters) => {
      return state.links
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
