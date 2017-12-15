import ScrollLock from './vue-scroll-lock.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('scroll-lock', ScrollLock)
}

const VueScrollLock = {
  install,
  ScrollLock,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScrollLock)
}

export default VueScrollLock
