import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Category from '../views/Categroy.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
import Ajax from '../views/Ajax.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  }
]

const router = new VueRouter({
  routes
})

export default router
