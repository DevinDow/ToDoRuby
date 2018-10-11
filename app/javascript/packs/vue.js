import Vue from 'vue/dist/vue.esm'
console.log("*** Vue.config.devtools = " + Vue.config.devtools);
Vue.config.devtools = true
console.log("*** Vue.config.devtools = " + Vue.config.devtools);

import TurbolinksAdapter from 'vue-turbolinks'
Vue.use(TurbolinksAdapter)

import App from '../vue_components/App.vue'
Vue.component('App', App)

document.addEventListener('turbolinks:load', () => {
  console.log("*** turbolinks:load");
  const vm = new Vue({
    el: '#app'
  })
})
