<template>
  <van-tabbar v-model="active" active-color="#3750b2" class="leftnav" @change="change">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item to="/user">用户管理</van-tabbar-item>
    <van-tabbar-item to="/book">商品管理</van-tabbar-item>
    <van-tabbar-item to="/order">订单管理</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
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
.leftnav{
  text-align: center;
  height: 6vh;
  line-height: 6vh;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}
</style>