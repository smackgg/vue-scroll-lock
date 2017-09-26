import TactfulScroll from './vue-tactful-scroll.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('tactful-scroll', TactfulScroll)
}

const VueTactfulScroll = {
  install: install,
  TactfulScroll,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTactfulScroll)
}

export default VueTactfulScroll
