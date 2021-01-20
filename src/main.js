import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'


Vue.config.productionTip = false
Vue.config.devtools= true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

