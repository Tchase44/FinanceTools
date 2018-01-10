import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'
// pages
import Home from '@/components/pages/Home'
import Authentication from '../components/pages/Authentication/Authentication'
// Global
import Header from '@/components/Header'

Vue.component("app-header", Header)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header
      },
      meta: {
        // Nav gaurd
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
// check if user logged in
router.beforeEach((to,from,next)=>{
  if (to.meta.requiredAuth){
    if (Auth.default.user.authenticated){
      next()
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
})

export default router