<template>
  <div class="app-body-container">
    <div class="cart-container">
      <div class="top-nav">确认订单</div>
      <div class="last-address">
        <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
      </div>
      <div class="card-address">
        <div class="card-address-item">
          <div class="card-address-item-text">
            <p class="card-address-item-text-one">{{list[0].name+" "+list[0].tel}}</p>
            <p class="card-address-item-text-two">{{list[0].value+" "+list[0].address}}</p>
          </div>
        </div>
      </div>
      <div class="pay">
        <div class="pay-container">
          <div class="pay-container-text">支付方式</div>
          <div class="pay-container-choice" @click="showPopup" @choose="chose">{{message}}</div>
          <div class="pay-container-icon" @click="showPopup">
            <van-icon name="arrow" />
          </div>
          <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '60%' }"
          >
            <div style="height: 70px"></div>
            <van-radio-group v-model="radio">
              <van-cell-group>
                <van-cell title="支付宝支付" clickable @click="radio = '1'">
                  <template #right-icon>
                    <van-radio name="1" />
                  </template>
                </van-cell>
                <van-cell title="微信支付" clickable @click="radio = '2'">
                  <template #right-icon>
                    <van-radio name="2" />
                  </template>
                </van-cell>
              </van-cell-group>
            </van-radio-group>
            <div class="choice-yes" @click="onChoice">确定</div>
          </van-popup>
        </div>
      </div>
      <div class="card-container">
        <div>
          <van-card
            v-for="(item, index) in productList"
            :key="index"
            :price="item.price"
            :desc="item.company"
            :title="item.name"
            :thumb="item.img"
            @click-thumb="goDetail(item._id)"
          ></van-card>
        </div>
        <div class="distribution">
          <div class="distribution-one">配送方式</div>
          <div class="distribution-two">普通配送</div>
          <div class="distribution-three">快递 免邮</div>
        </div>
        <div class="total">
          <div class="total-one" :num="num">共{{num}}件</div>
          <div class="total-two" :totalPrice="totalPrice">￥{{totalPrice}}</div>
        </div>
      </div>
    </div>
    <van-submit-bar
      class="submit-order"
      :price="totalPrice2"
      button-text="提交订单"
      @submit="onSubmit"
    />
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
      list: [],
      show: false,
      radio: "1",
      message: "请选择",
      productList: [],
      statu: "未处理"
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return this.productList.reduce((sum, elem) => {
        sum += elem.price;
        return sum;
      }, 0);
    },
    totalPrice2() {
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) *
        10 *
        10
      );
    },
    num() {
      return this.productList.length;
    }
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
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/profile");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
      console.log(to);
      console.log(from);
    next(() => {
      //  这里的vm指的就是vue实例，可以用来当做this使用
      
    });
  },
  methods: {
    goLast() {
      this.$router.push("/cart");
    },
    onChoice() {
      this.show = false;
      this.$emit("choose", this.radio);
      console.log(this.radio);
      if (this.radio == 2) {
        this.message = "微信支付";
      } else if (this.radio == 1) {
        this.message = "支付宝支付";
      }
    },
    chose(radio) {
      this.message = radio;
      console.log(this.radio);
    },
    showPopup() {
      this.show = true;
    },
    delAllproductList() {
      axios({
        url: url.delAllproductList,
        method: "post",
        data: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          this.productList = [];
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit() {
      axios({
        url: url.successOrder,
        method: "post",
        data: {
          statu: this.statu,
          totalPrice: this.totalPrice,
          list: this.list[0],
          productList: this.productList,
          message: this.message,
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res, res.data.code);
          if (res.data.code == 200) {
            this.$toast.success("提交订单成功");
            console.log(this.$router.history.current.name);
              this.delAllproductList();
              this.$router.push("/cart");
          }
        })
        .catch(err => {
          console.log(err);
        });
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
  margin-bottom: 50px;
  overflow: scroll;
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
  &-item {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    margin: 10px;
    &-text {
      &-one {
        color: #323233;
        font-size: 16px;
        font-weight: bold;
      }
      &-two {
        color: #323233;
        font-size: 13px;
      }
    }
  }
}
.pay {
  &-container {
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    margin: 10px;
    display: flex;
    &-text {
      flex: 4;
      text-align: center;
    }
    &-choice {
      flex: 12;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
    }
    &-icon {
      flex: 1;
      text-align: right;
      align-items: center;
    }
  }
}
.choice-yes {
  background: #1989fa;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  margin-top: 70px;
}
.card-container {
  background: #fff;
  margin: 10px;
  border-radius: 8px;
  padding: 12px;
}
.van-card__title .van-multi-ellipsis--l2 {
  color: #000;
}
.van-card__price {
  color: #696a6b;
}
.van-card {
  background: #fff;
}
.distribution {
  margin-top: 10px;
  display: flex;
  &-one {
    flex: 1;
    text-align: center;
  }
  &-two {
    flex: 2;
    text-align: left;
    color: #696a6b;
  }
  &-three {
    flex: 1;
    text-align: center;
  }
}
.total {
  margin-top: 10px;
  display: flex;
  height: 30px;
  line-height: 30px;
  &-one {
    flex: 3;
    text-align: right;
    color: #696a6b;
  }
  &-two {
    flex: 1;
    text-align: center;
    color: #ee0a24;
    font-size: 16px;
  }
}
</style>