import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import C from './views/C.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import Err from './views/Error.vue'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/a',
      component: A,
      children: [
        {
          path: '/vuecli3/src/views/Test1.vue',
          component: Test1
        },
        {
          path: '/vuecli3/src/views/Test2.vue',
          component: Test2
        }
      ]
    },
    {
      // path: '/b',
      // name:'b',
      // component: B
      path:'/b/:id',
      redirect:'/c/:id'
    },
    {
      path: '/c/:id',
      component: C
    },
    {
      path:'/home',
      redirect:'/'
    },
    {
      path:'/',
      component:Home,
      alias:'/xxx'
    },
    {
      path:'*',
      component:Err
    }
  ]
})
