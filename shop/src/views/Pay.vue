<template>
  <div class="pay-container">
    <div class="top-nav">扫码支付</div>
    <div class="last-pay">
      <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
    </div>
    <div class="pay-code">
      <van-notice-bar
        class="van-notice-bar"
        color="#1989fa"
        background="#ecf9ff"
        text="请保存二维码以方便扫码支付"
        left-icon="volume-o"
      />
      <img src="../assets/img/weixin.png" alt />
      <img src="../assets/img/weixinma.png" alt />
      <img src="../assets/img/zhifubao.png" alt />
      <img src="../assets/img/zhifubaoma.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goLast() {
      this.$router.push("/mine");
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f7f8fa;
}
.pay-container {
  height: 100vh;
  overflow: scroll;
  background: #f7f8fa;
}
.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  color: #3750b2;
  font-weight: bolder;
  text-align: center;
  font-size: 16px;
  height: 46px;
  line-height: 46px;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.last-pay {
  position: fixed;
  top: 8px;
  z-index: 10000;
}
.pay-code {
  margin-top: 47px;
  background: #fff;
  img {
    width: 50%;
  }
}
</style>