import Vue from 'vue'
import Router from 'vue-router'
import One from '@/views/One.vue'
import OneDetail from '@/views/OneDetail.vue'
import Two from '@/views/Two.vue'
import Three from '@/views/Three.vue'
import ThreeDetail from '@/views/ThreeDetail.vue'
import ThreeMore from '@/views/ThreeMore.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component:One
    },
    {
      path:'//:id',
      component:OneDetail
    },
    {
      path:'/two',
      component:Two
    },
    {
      path:'/three',
      component:Three
    },
    {
      path:'/threedetail/:index',
      component:ThreeDetail
    },
    {
      path:'/threemore',
      component:ThreeMore
    }
  ]
})
