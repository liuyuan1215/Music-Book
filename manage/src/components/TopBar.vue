<template>
  <div class="bigtitle">
    <div class="bigtitle-one"><img src="../assets/img/top.png" alt /></div>
    <div class="bigtitle-two">网 上 书 城 系 统</div>
    <div class="bigtitle-three">
      <div class="bigtitle-three-denglu" @click="$router.push('/login')">注册&nbsp;登录</div>
      <div class="bigtitle-three-exit" @click="exit">退出</div>
    </div>
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
        url: url.exitManageUser,
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
    &-denglu{
      flex: 2;
      margin-right: 15px;
      cursor: pointer;
    }
    &-exit{
      flex:1;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>