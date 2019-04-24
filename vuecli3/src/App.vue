<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">home</router-link> |
      <router-link to="/a">aa页面</router-link> |
      <!-- <router-link to="/b">b页面</router-link>    -->
      <router-link :to="{name:'b',params:{name:'ly',age:21}}">bb页面</router-link> |
      <router-link to="/c/7788">cc页面</router-link> |
      <router-link to="/b/1122">重定向</router-link> |
      <router-link to="/xxx">别名</router-link> 
    </div>
    <transition name='fade'>
      <router-view/>
    </transition>
    <button @click = 'goPrev()'>&lt;</button>
    <button @click = 'goNext()'>&gt;</button>
    <button @click = 'goHome()'>Home</button>
  </div>
</template>

<script>
    export default {
        methods:{
          goPrev(){
            this.$router.go(-1);
          },
           goNext(){
            this.$router.go(1);
          },
          goHome(){
            this.$router.push('/');
          }
        }
    }
</script>

<style>
  .fade-enter{
    /* opacity:0; */
    transform:translateX(-100%);
  }
  .fade-enter-active{
    /* transition:opacity 2s ease 1s; */
    transition:transform 1s ease 0s;
  }
  .fate-enter-to{
    /* opacity:1; */
    transform:translateX(0);
  }
  .fade-leave{
    /* opacity:1; */
    transform:translateX(100%);
  }
  .fade-leave-active{
    /* transition:opacity 2s ease 1s; */
    transition:transform 1s ease 0s;
  }
  .fate-leave-to{
    /* opacity:0; */
    transform:translateX(0);
  }
</style>
