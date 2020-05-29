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
          v-for="(item, index) in productList0"
          :key="index"
          :num="item.val"
          :price="item.productId.price"
          :desc="item.productId.company"
          :title="item.productId.name"
          :thumb="item.productId.fileList1[0].content"
          @click-thumb="goDetail(item.productId._id)"
        >
          <div slot="footer">
            <span @click="reduceCount(item,item.val)">
              <van-button size="mini">-</van-button>
            </span>
            <span @click="showModal(item)" class="input">
              <span class="input-edit">{{item.val}}</span>
            </span>
            <span @click="addCount(item,item.val)">
              <van-button size="mini">+</van-button>
            </span>
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
import { Toast } from "vant";
// import { handleError } from "../utils/utils";
export default {
  data() {
    return {
      productList: [],
      productList0: [],
      isLoading: false, // 上拉加载
      isShow: true
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.productList0.reduce((sum, elem) => {
          sum += elem.productId.price * elem.val;
          return sum;
        }, 0) *
        10 *
        10
      );
    },
    num() {
      return this.productList0.length;
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
          // for (let item of res.data) {
          // this.productList0.push(item);
          // this.productList = [...res.data.map(item=>item.productId),...res.data.map(item=>item.val)]
          // let a = res.data.map(item => item.productId);
          // let b = res.data.map(item => item.val);
          // a.forEach(item => {
          //   item.val = "";
          // });
          // for (let x = 0; x < b.length; x++) {
          //   for (let y = 0; y < a.length; y++) {
          //     a[y].val = b[y]
          //   }
          // }
          // console.log(a);
          // console.log(b);
          // this.productList = a;
          this.productList0 = res.data;
          for (let item of res.data) {
            if (item.length != 0) {
              this.isShow = false;
            }
          }
          this.isShow = false;
          // }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    // 更新购物车数量
    updateCartCountThrottle(_id, val) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.updateCartCount(_id, val);
      }, 500);
    },
    updateCartCount(_id, val) {
      axios({
        url: url.editCart,
        method: "post",
        data: { _id, val }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.getCartList();
            console.log("正在更新");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // async updateCartCount(_id, val) {
    //   try {
    //     let res = await axios({
    //       url: url.editCart,
    //       method: "post",
    //       data: { _id, val }
    //     });
    //     if (res.errorCode == 200) {
    //       this.getCartList();
    //       console.log('正在更新')
    //     } else {
    //       // this.$notify({
    //       //   message: res.errorMsg
    //       // });
    //     }
    //   } catch (err) {
    //     handleError(err, this.$router);
    //   }
    // },
    addCount(good, val) {
      if (!val && val !== 0) {
        Toast({
          position: "bottom",
          message: "数值不正确~"
        });
        return;
      }
      if (val >= 10) {
        Toast({
          position: "bottom",
          message: "限购10本~"
        });
        return;
      }
      val++;
      good.val = val;
      this.updateCartCountThrottle(good._id, val);
    },
    showModal(item) {
      this.modalShow = true;
      this.editGood = item;
      this.editNum = item.val;
    },
    reduceCount(good, val) {
      if (!val && val !== 0) {
        Toast({
          position: "bottom",
          message: "数值不正确~"
        });
        return;
      }
      if (val <= 1) {
        Toast({
          position: "bottom",
          message: "不能再少了~"
        });
        return;
      }
      val--;
      good.val = val;
      this.updateCartCountThrottle(good._id, val);
    },
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
          let a = res.data.map(item => item.productId);
          let b = res.data.map(item => item.val);
          a.forEach(item => {
            item.val = "";
          });
          for (let x = 0; x < b.length; x++) {
            for (let y = 0; y < a.length; y++) {
              a[y].val = b[y];
            }
          }
          console.log(a);
          this.productList = a;
          this.productList0 = res.data;
          for (let item of res.data) {
            // this.productList.push(item.productId);
            if (item.length != 0) {
              // this.productList0.push(item);
              // this.productList0 = this.productList0.concat(item);
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
        this.productList0 = [];
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
          ID: id
        }
      })
        .then(res => {
          console.log(res);
          this.productList0.splice(index, 1);
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

