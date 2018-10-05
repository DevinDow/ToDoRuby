import Vue from 'vue/dist/vue.esm'

import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

import App from '../app.vue'
Vue.component('app', App)

document.addEventListener('turbolinks:load', () => {
  const main = new Vue({
    el: '#main'
  })
})
