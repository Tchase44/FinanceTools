import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'
// pages
import Home from '@/components/pages/Home'
import Authentication from '../components/pages/Authentication/Authentication'
// Global
import Header from '@/components/Header'
import BudgetList from '@/components/Budget/BudgetList'

Vue.component("app-header", Header)
Vue.component("budget-list",BudgetList)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        budgetList: BudgetList
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