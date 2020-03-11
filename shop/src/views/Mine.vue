<template>
  <div class="nav">
    <div class="top-nav">我的</div>
    <div class="go-profile">
      <van-icon size="20" color="#3750b2" name="setting-o" @click="$router.push('/profile')" />
    </div>
    <div
      class="login-style"
    >{{JSON.stringify(userInfo) === '{}' ? '未登录' : "用户名："+userInfo.userName}}</div>
    <div class="favorites" @click="$router.push('/star')">
      <van-icon name="star" />&nbsp;收藏夹
    </div>
    <div class="address" @click="$router.push('/address')">
      <van-icon name="location" />&nbsp;我收货的地址
    </div>
    <div class="exit" @click="exit">退出登录</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Toast } from "vant";
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["loginAction"]),
    //退出登录
    exit() {
      axios({
        url: url.exitUser,
        method: "post",
        data: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                this.$toast.success("退出登录成功");
                // 清空登录状态
                this.loginAction({});
              })
              .catch(err => {
                this.$toast.fail("清空登录状态失败");
                console.log(err);
              });
          } else {
            this.$toast.fail("退出登录失败1");
          }
        })
        .catch(err => {
          console.log(err);
          Toast("退出登录失败2");
        });
    }
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
  padding-top: 46px;
  padding-left: 15px;
  color: #3750b2;
  height: 1rem;
  line-height: 1rem;
  background: #e6f5ff;
}
.favorites,.address {
  background: #fff;
  height: 40px;
  line-height: 40px;
  margin-top: 8px;
  font-weight: bold;
  padding-left: 15px;
  color: #3750b2;
}
.go-profile {
  position: fixed;
  top: 13px;
  right: 10px;
  z-index: 100;
}
.exit {
  margin-top: 8px;
  background: #fff;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #3750b2;
  font-weight: bold;
}
</style>