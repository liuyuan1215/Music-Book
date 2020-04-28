import Vue from 'vue'
import VueRouter from 'vue-router'
let Home = () => import('../views/Home.vue');
let User = ()=> import('../views/User.vue');
let Book = ()=> import('../views/Book.vue');
let Order = ()=> import('../views/Order.vue');
import NavBar from '../components/NavBar.vue'
import TopBar from '../components/TopBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'nav-bar': NavBar,
      'top-bar': TopBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: User,
      'nav-bar': NavBar,
      'top-bar': TopBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/book',
    name: 'book',
    components: {
      default: Book,
      'nav-bar': NavBar,
      'top-bar': TopBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/order',
    name: 'order',
    components: {
      default: Order,
      'nav-bar': NavBar,
      'top-bar': TopBar
    },
    meta: {
      keepAlive: true
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
