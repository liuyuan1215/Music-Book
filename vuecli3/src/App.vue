<template>
  <div id="app">
    <div id="nav">
      <router-link to="/a">aa页面</router-link> |
      <router-link :to="{name:'b',params:{name:'ly',age:21}}">bb页面</router-link> |
      <router-link to="/c/7788">cc页面</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
