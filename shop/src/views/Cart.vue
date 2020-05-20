<template>
  <div class="cart-container">
    <!-- <van-nav-bar class="top-nav" title="购物车" :num="num"></van-nav-bar> -->
    <div class="top-nav" :num="num">购物车（{{num}}）</div>

    <van-notice-bar
      class="van-notice-bar"
      color="#1989fa"
      background="#ecf9ff"
      text="通知内容通知内容通知内容"
      left-icon="volume-o"
    />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div v-if="isShow" style="height:100px;"></div>
      <div id="divcard" class="cart-card">
        <van-card
          v-for="(item, index) in productList"
          :key="index"
          :price="item.price"
          :desc="item.company"
          :title="item.name"
          :thumb="item.img"
          @click-thumb="goDetail(item._id)"
        >
          <div slot="footer">
            <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
          </div>
        </van-card>
      </div>
    </van-pull-refresh>
    <van-submit-bar
      class="cart-submit-bar"
      :price="totalPrice"
      button-text="去结算"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      productList: [],
      isLoading: false, // 上拉加载
      isShow: true
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
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
            for (let item of res.data) {
              if (item.length != 0) {
                this.isShow = false;
              }
            }
            this.isShow = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    getCartList() {
      this.isLoading = true;
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
            // this.productList.push(item.productId);
            if (item.length != 0) {
              this.productList = this.productList.concat(item.productId);
              this.isShow = false;
            }
          }
          this.isShow = false;
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.getCartList();
      }, 1500);
    },
    onSubmit() {
      axios({
        url: url.submitOrder,
        method: "post",
        data: {
          productList: this.productList,
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res, res.data.code);
          if (res.data.code == 200) {
            // this.$toast.success("提交订单成功");
            // this.productList = [];
            this.$router.push("/orderdetail");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    delCart(id, index) {
      axios({
        url: url.delCart,
        method: "post",
        data: {
          productId: this.$route.query.id
        }
      })
        .then(res => {
          console.log(res);
          this.productList.splice(index, 1);
          this.getCartList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    goDetail(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style lang="scss">
body {
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
.cart-container {
  background: #f7f8fa;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.cart-submit-bar {
  margin-bottom: 50px;
}
.cart-card {
  // background: #f7f8fa;
  // padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.van-card__title .van-multi-ellipsis--l2 {
  color: #000;
}
.van-card__price {
  color: #ee0a24;
}
.van-card {
  background: #fff;
}
.van-notice-bar {
  margin-top: 46px;
  margin-bottom: 8px;
  height: 30px;
}
</style>

