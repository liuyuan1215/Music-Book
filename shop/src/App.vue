<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <router-view name="footer-bar"></router-view>

    <!-- <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon='home-o' to="/">首页</van-tabbar-item>
      <van-tabbar-item icon='records' to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon='cart' to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon='contact' to="/profile">我的</van-tabbar-item>
    </van-tabbar> -->
    
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     active:0
  //   }
  // }
}
</script>

<style lang="scss">
// .footer-bar {
//   display: flex;
//   background: #eeeeee;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 1rem;
//   &-item {
//     flex: 1;
//     text-align: center;
//     line-height: 1rem;
//   }
// }

</style>
