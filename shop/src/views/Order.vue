<template>
  <div class="cart-container">
    <div class="top-nav">全部订单</div>
    <div class="last-order">
      <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
    </div>
    <div class="card-order">
      <div class="card-order-item" v-for="(item, index) in successorder" :key="index">
        <div class="card-order-item-title">订单{{index+1}}</div>
        <div class="card-order-address-con">
          <div
            class="card-order-address-item"
            v-for="(itemList, i) in successorder[index].list"
            :key="i"
          >
            <div class="card-order-address-item-icon">
              <van-icon name="location" size="20" color="#3750b2" />
            </div>
            <div class="card-order-address-item-text">
              <p class="card-order-address-item-text-one">{{" "+itemList.name+" "+itemList.tel}}</p>
              <p class="card-order-address-item-text-two">{{itemList.value+" "+itemList.address}}</p>
            </div>
          </div>
        </div>
        <div class="card-order-address-goods">
          <van-card
            v-for="(itemProductList, j) in successorder[index].productList"
            :key="j"
            :price="itemProductList.price"
            :desc="itemProductList.company"
            :title="itemProductList.name"
            :thumb="itemProductList.img"
          ></van-card>
        </div>
        <div class="card-order-address-price">
          <div class="card-order-address-price-text">合计</div>
          <div class="card-order-address-price-val">￥{{item.totalPrice}}</div>
        </div>
        <div class="card-order-address-mes">
          <div class="card-order-address-mes-title">订单信息</div>
          <div class="card-order-address-mes-num">订单编号：{{item._id}}</div>
          <div class="card-order-address-mes-time">创建时间：{{item.createDate}}</div>
          <div class="card-order-address-mes-statu">订单状态：{{item.statu}}</div>
        </div>
      </div>
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
      successorder: []
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
        url: url.getSuccessOrder,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          this.successorder = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
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
.cart-container {
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
.last-order {
  position: fixed;
  top: 8px;
  z-index: 10000;
}
.card-order {
  padding-top: 47px;
}
.card-order-item{
  
}
.card-order-item-title{
  background: #fff;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color: #3750b2;
}
.card-order-address-con {
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  .card-order-address-item {
    display: flex;
    &-icon {
      flex: 1;
      text-align: center;
    }
    &-text {
      flex: 15;
    }
  }
}
.card-order-address-goods {
  background: #fff;
  .van-card {
    background: #fff;
  }
}
.card-order-address-price {
  background: #fff;
  padding: 10px;
  display: flex;
  font-size: 16px;
  margin-bottom: 10px;
  &-text {
    flex: 1;
    text-align: left;
  }
  &-val {
    flex: 4;
    text-align: right;
    color: #3750b2;
    font-weight: bold;
  }
}
.card-order-address-mes {
  background: #fff;
  margin-bottom: 20px;
  &-title {
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #ccc;
  }
  &-num,
  &-time,
  &-statu {
    padding: 10px;
  }
}
</style>