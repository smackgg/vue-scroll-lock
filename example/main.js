import Vue from 'vue'
import App from './App.vue'

import VueScrollLock from '../src/index'
Vue.use(VueScrollLock)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
