import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Agent/Dashboard.vue'
import Login from '../views/Agent/Login.vue'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: isLoggedOut
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})



function requireAuth(to, from, next) {
  if (!store.getters.isLoggedIn) {
    next("/login")
  } else {
    next()
  }
}

function isLoggedOut(to, from, next) {
  if (store.getters.isLoggedIn) {
    next("/dashboard")
  } else {
    next()
  }
}

export default router
