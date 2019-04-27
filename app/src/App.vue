<template>
  <div id="app">
    <common-header :selectMenu='selectMenu'></common-header>
    <div id="content">
      <router-view></router-view>
    </div>
    <common-footer :menu='menu' :selectMenu='selectMenu' @change='fn'></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  data() {
    return {
      menu: [
        {
          name: "电影",
          path: "/movie",
          bg: "#00a862"
        },
        {
          name: "音乐",
          path: "/music",
          bg: "#456789"
        },
        {
          name: "书籍",
          path: "/book",
          bg: "#778898"
        },
        {
          name: "图片",
          path: "/photo",
          bg: "pink"
        }
      ],
      selectMenu: {
        name: "电影",
        path: "/moive",
        bg: "#00a862"
      }
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(index){
      this.selectMenu = this.menu[index];
    }
  },
  created(){
    this.menu.forEach((obj,index)=>{
      if(obj.path==this.$route.path){
        this.selectMenu = obj;
      }
    })
  }
};
</script>

<style>
#content {
  margin: 1rem 0;
}
</style>
