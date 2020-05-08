<template>
  <!-- <van-tabbar v-model="active" active-color="#6375eb" class="leftnav" @change="change">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item to="/user">用户管理</van-tabbar-item>
    <van-tabbar-item to="/book">商品管理</van-tabbar-item>
    <van-tabbar-item to="/order">订单管理</van-tabbar-item>
  </van-tabbar>-->
  <van-sidebar v-model="activeKey" class="leftnav">
    <van-sidebar-item to="/" title="首页" />
    <van-sidebar-item to="/user" title="用户管理" />
    <van-sidebar-item to="/book" title="商品管理" />
    <van-sidebar-item to="/order" title="订单管理" />
  </van-sidebar>
</template>

<script>
export default {
  data() {
    return {
      // active: 0
      activeKey: 0
    };
  },
  created() {
    this.active = parseInt(localStorage.getItem("active"));
  },
  methods: {
    change(active) {
      localStorage.setItem("active", active);
    }
  }
};
</script>

<style scoped>
.leftnav {
  text-align: center;
  height: 6vh;
  line-height: 6vh;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}
.van-sidebar-item--select::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 4px;
  height: 30px;
  background-color: #6375eb;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  content: "";
}
.van-sidebar-item {
  color: #000;
  font-size: 18px;
  font-weight: 400;
}
</style>