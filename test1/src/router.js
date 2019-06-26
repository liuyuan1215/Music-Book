import Vue from 'vue'
import Router from 'vue-router'
import Item from './views/Item.vue'
import One from '@/views/One.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/item',
      name:'item',
      component:Item
    },
    {
      path:'/one',
      name:'one',
      component:One
    }
  ]
})
