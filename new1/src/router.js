import Vue from 'vue'
import Router from 'vue-router'
import One from '@/views/One.vue'
import Two from '@/views/Two.vue'
import Three from '@/views/Three.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/one',
      component:One
    },
    {
      path:'/two',
      component:Two
    },
    {
      path:'/three',
      component:Three
    }
  ]
})
