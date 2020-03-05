<template>
  <div class="nav">
    <div class="top-nav">我的</div>
    <div class="go-profile">
      <van-icon size="20" color="#3750b2" name="setting-o" @click="$router.push('/profile')" />
    </div>
    <div
      class="login-style"
    >{{JSON.stringify(userInfo) === '{}' ? '未登录' : "用户名："+userInfo.userName}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 100vh;
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
}
.login-style {
  font-weight: bold;
  padding-top: 56px;
  padding-left: 10px;
  color: #3750b2;
}
.go-profile {
  position: fixed;
  top: 13px;
  right: 10px;
  z-index: 100;
}
</style>