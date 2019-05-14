<template>
  <div id="app">
    <common-header :selectMenu="selectMenu"></common-header>
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
      menu: [
        {
          name: "首页",
          path: "/one",
          color: "#fff"
        },
        {
          name: "菜单2",
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
        path: "one",
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
      this.selectMenu = this.menu[index];
    }
  },
  created() {
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
