import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
let Home = ()=> import('../views/Home.vue');
let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');
import Ajax from '../views/Ajax.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/FooterBar.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'category',
    // component: () => import('../views/Category.vue')
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: () => import('../views/Cart.vue')
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    // component: () => import('../views/Profile.vue')
    components: {
      default: Profile,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
