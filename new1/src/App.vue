<template>
  <div id="app">
    <div id="left-nav">
      <div id="music"></div>
      <div id="star"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  
}
</script>

<style>
  #left-nav{
    width: 80px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #161716;
    flex:200px;
  }
  #music{
    width: 40px;
    height: 40px;
    background: #ccc;
    margin: 20px 20px auto 20px ;
  }
  #star{
    width: 40px;
    height: 40px;
    background: #ccc;
    margin: 20px 20px auto 20px ;
  }
</style>
