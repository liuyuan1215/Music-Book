<template>
  <div class="user">
    <div class="user-num">用户总量：{{users.length}}</div>
    <div class="user-userlisttop">
      <div class="user-userlisttop-one">用户编号</div>
      <div class="user-userlisttop-two">用户名</div>
      <div class="user-userlisttop-three">注册时间</div>
    </div>
    <div v-for="(item, index) in users" :key="index" class="user-userlist">
      <div class="user-userlist-one">{{index+1}}</div>
      <div class="user-userlist-two">{{item.userName}}</div>
      <div class="user-userlist-three">{{item.createDate}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      users: []
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // 验证用户是否登录
    // if (JSON.stringify(this.userInfo) === "{}") {
    //   this.$toast.fail("请先登录");
    //   setTimeout(() => {
    //     this.$router.push("/login");
    //   }, 1000);
    // } else {
    axios({
      url: url.getRegistUser,
      method: "get",
      params: {}
    })
      .then(res => {
        console.log(res);
        this.users = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // }
  }
};
</script>

<style lang="scss" scoped>
.user {
  position: fixed;
  left: 13vw;
  width: 81vw;
  margin: 5vh 3vw;
  height: 80vh;
  overflow-y: scroll;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  &-num{
    font-size: 18px;
    padding: 15px;
    border-bottom: 1px solid #6375eb;
  }
  &-userlisttop{
    display: flex;
    font-size: 18px;
    margin: 10px;
    text-align: center;
    &-one{
      flex: 1;
    }
    &-two{
      flex: 4;
    }
    &-three{
      flex: 6;
    }
  }
  &-userlist{
    display: flex;
    margin: 10px;
    text-align: center;
    &-one{
      flex: 1;
      border-right: 1px solid #ccc;
    }
    &-two{
      flex: 4;
      border-right: 1px solid #ccc;
    }
    &-three{
      flex: 6;
    }
  }
}
</style>