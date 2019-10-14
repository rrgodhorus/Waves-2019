import Vue from 'vue'
import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
