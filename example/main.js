import Vue from 'vue'
import App from './App.vue'

import VueScrollLock from '../src/index'
// import VueScrollLock from '../lib/vue-scroll-lock.min.js'
Vue.use(VueScrollLock)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
