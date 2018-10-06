import Vue from 'vue/dist/vue.esm'
Vue.config.devtools = true

import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

import App from '../App.vue'
Vue.component('App', App)

document.addEventListener('turbolinks:load', () => {
  const vm = new Vue({
    el: '#app'
  })
})
