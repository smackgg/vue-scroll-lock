import Vue from 'vue'
import App from './App.vue'

import TactfulScroll from 'vue-tactful-scroll'
Vue.use(TactfulScroll)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
