import Vue from 'vue'
import App from './App.vue'
import VueScrollLock from 'vue-scroll-lock'
import 'github-markdown-css'
import 'highlight.js/styles/github.css'

Vue.use(VueScrollLock)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
})
