<template>
  <div id="app">
    <div id="left-nav">

    </div>
    <div id="right">

    </div>
    <common-footer></common-footer>
    <router-view/>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  
}
</script>

<style>
#app{
  display: flex;
}
  #left-nav{
    width: 200px;
    height:3rem;
    background: #eee;
    flex:200px;
  }
  #right{
    flex:1;
  }
</style>
