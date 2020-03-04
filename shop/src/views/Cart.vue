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
    <div class="card">
      <van-card
        v-for="(item, index) in pruductList"
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
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      pruductList: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.pruductList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) *
        10 *
        10
      );
    },
    num() {
      return this.pruductList.length;
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
          console.log(res)
          for (let item of res.data) {
            this.pruductList.push(item.productId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      this.$toast.success("提交订单成功");
      this.pruductList = [];
    },
    delCart(id, index) {
      axios({
        url: url.delCart,
        method: "post",
        data: {
          productId: this._id
        }
      })
        .then(res => {
          console.log(res);
          this.pruductList.splice(index, 1);
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
.submit-bar {
  margin-bottom: 50px;
}
.card {
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

