<template>
  <div class="cart-container">
    <div class="top-nav">我收货的地址</div>
    <div class="last-address">
      <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
    </div>
    <div class="card-address">
      <div class="card-address-item" v-for="(item, index) in list" :key="index">
        <p class="card-address-item-one">{{item.name+" "+item.tel}}</p>
        <p class="card-address-item-two">{{item.value+" "+item.address}}</p>
      </div>
    </div>
    <div class="card-address-add">
      <div class="card-address-add-button" @click="onAdd">新增地址</div>
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
      chosenAddressId: "1",
      list: []
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getAddress,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    goLast() {
      this.$router.push("/mine");
    },
    delAddress() {
      axios({
        url: url.delAddress,
        method: "post",
        data: {
          addressId: this._id
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onAdd() {
      this.$router.push("/addressedit");
    },
    onEdit() {}
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f7f8fa;
}
.cart-container {
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
  border-bottom: 1px solid #eee;
}
.last-address {
  position: fixed;
  top: 8px;
  z-index: 10000;
}
.card-address {
  padding-top: 47px;
  padding-bottom: 50px;

  &-item {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    margin: 10px;
    &-one {
      color: #323233;
      font-size: 16px;
    }
    &-two {
      color: #323233;
      font-size: 13px;
    }
  }
}
.card-address-add {
  padding: 5px 16px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  &-button {
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #ee0a24;
    border-radius: 20px;
  }
}
</style>