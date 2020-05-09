<template>
  <div class="book">
    <div style="border-bottom: 1px solid #ccc;">
      <van-tabs
        class="booknav"
        title-active-color="#6375eb"
        color="#6375eb"
        title-inactive-color="#000"
        v-model="active"
      >
        <van-tab to="/booklist" title="商品列表"></van-tab>
        <van-tab to="/addbook" title="添加商品"></van-tab>
      </van-tabs>
    </div>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
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
.booknav {
  text-align: center;
  height: 7vh;
  line-height: 7vh;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  /* background: #6375eb;
  border-radius: 10px; */
  /* color: #ccc; */
  padding: 0vh 5vh;
  margin: 2vh 3vh;
}
.book {
  position: fixed;
  left: 13vw;
  width: 81vw;
  margin: 5vh 3vw;
  height: 80vh;
  overflow-y: scroll;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>