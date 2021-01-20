import Vue from 'vue'
import VueRouter from 'vue-router'
import Sms from '../views/Sms.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sms',
    name: 'Sms',
    component: Sms
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
