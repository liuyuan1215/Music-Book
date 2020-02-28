<template>
  <div>
    <div class="error">
      <img src="../assets/img/404.jpg" alt />
    </div>
    <p>您要查看的网址可能已被删除或者暂时不可用。</p>
    <p>点击一下链接继续浏览网站</p>
    <p @click="goPrev()"><van-icon name="arrow" /><van-icon name="arrow" />返回上一级</p>
    <p @click="goHome()"><van-icon name="arrow" /><van-icon name="arrow" />返回到首页</p>
  </div>
</template>

<script>
export default {
  methods: {
    goPrev() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
p{
  text-align: center;
  font-size: 14px;
  color: #453a3a;
}
</style>