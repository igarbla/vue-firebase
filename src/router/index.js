import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'

import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach(
  (to, from, next) => {
    let currentUser = Firebase.auth().currentUser
    let requiresAuth = to.matched.some(
      record => record.meta.requiresAuth
    )
    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('dashboard')
    else next()
  }
)

export default router
