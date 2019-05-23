<template>
  <div id="app">
    <common-header :selectMenu="selectMenu" :isShow='show' @aa ="aa" ></common-header>
    <div id="content">
      <router-view/>
    </div>
    <common-footer :menu="menu" :selectMenu="selectMenu" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter.vue";
import CommonHeader from "@/components/CommonHeader.vue";
export default {
  data() {
    return {
      show:true,
      menu: [
        {
          name: "首页",
          path: "/",
          color: "#fff"
        },
        {
          name: "音乐",
          path: "/two",
          color: "#fff"
        },
        {
          name: "我的",
          path: "/three",
          color: "#fff"
        }
      ],
      selectMenu: {
        name: "首页",
        path: "/",
        color: "#fff"
      }
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(index) {
      console.log(index)
      this.selectMenu = {...this.menu[index]};
      console.log(this.$router.history.current.path);
      console.log(this.show);
      if(this.$router.history.current.path == '/'){
        this.show=false;
      }else{
        this.show=true;
      }    
    },
    aa(){
      console.log(111)
                    this.selectMenu.name='首页';

    }
  },
  created() {
    console.log(this.$router.history.current.path);
    if(this.$router.history.current.path == '/'){
        this.show=false;
      }else{
        this.show=true;
      }
    this.menu.forEach((obj, index) => {
      if (obj.path == this.$route.path) {
        this.selectMenu = obj;
      }
    });
  }
};
</script>

<style>
#content {
  margin: 1rem 0;
}
</style>
