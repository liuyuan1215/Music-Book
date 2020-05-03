<template>
  <div id="app">
    <router-view id="top" name="top-bar"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view id="left" name="nav-bar"></router-view>
  </div>
</template>

<style lang="scss">
#app{
  background: #f7f8fa;
}
#top{
  width: 100vw;
  height: 10vh;
  line-height: 10vh;
  background: #6375eb;
}
#left{
  height: 90vh;
  width: 13vw;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.2);
}
</style>
