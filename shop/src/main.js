import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'
import { Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload } from 'vant';

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'
// import 'vant/lib/index.css'

Vue.config.productionTip = false

// Vue.use(Vant)
// Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
