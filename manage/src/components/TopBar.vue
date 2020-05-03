<template>
  <div class="bigtitle">
    <div class="bigtitle-one"><img src="../assets/img/top.png" alt /></div>
    <div class="bigtitle-two">网 上 书 城 系 统</div>
    <div class="bigtitle-three">
      <div class="bigtitle-three-zhuce" @click="$router.push('/registration')">注册</div>
      <div class="bigtitle-three-denglu" @click="$router.push('/login')">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.bigtitle {
  display: flex;
  &-one {
    width: 20vh;
    position: relative;
    img{
      height: 8vh;
      width: 9.3vh;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  &-two {
    flex: 8;
    color: #fff;
    font-size: 30px;
  }
  &-three {
    flex: 1;
    color: #fff;
    font-size: 16px;
    display: flex;
    &-zhuce{
      flex: 1;
      cursor: pointer;
    }
    &-denglu{
      flex: 1;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>