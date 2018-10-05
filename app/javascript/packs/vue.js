import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

Vue.component('app', App)

document.addEventListener('turbolinks:load', () => {
  const main = new Vue({
    el: '#main'
  })
})
