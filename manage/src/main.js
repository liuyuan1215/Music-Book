import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, NavBar, Tabbar, TabbarItem, Sidebar, SidebarItem,  Col, Row, } from 'vant';
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.config.productionTip = false

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Col);
Vue.use(Row);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
