<template>
  <div class="detail-container">
    <van-nav-bar class="top-nav" title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <div class="detail-container-bg">
      <img :src="detail.img" alt class="detail-img" />
      <div class="detail">
        <div class="detail-top">
          <p class="detail-top-price">￥{{detail.price}}</p>
          <p class="detail-top-name">
            <van-icon name="goods-collect" />
            {{detail.name}}
          </p>
        </div>

        <div class="detail-div">
          <p class="detail-div-company">
            <van-icon name="shop" />
            出版社：{{detail.company}}
          </p>
          <p class="detail-div-city">
            <van-icon name="map-marked" />
            发货地：{{detail.city}}
          </p>
          <p class="detail-div-isbn">
            <van-icon name="label" />
            ISBN编号：{{detail.idnum}}
          </p>
        </div>
      </div>
    </div>
    <div class="detail-detailImg">
      <div class="detail-detailImg-text">宝贝详情</div>
      <img :src="detail.detailImg" alt />
    </div>

    <div class="toolbar">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="star" :text="text" @click="star" :class="{star:isStar}" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
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
      detail: {},
      isStar: false,
    };
  },
  created() {
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        console.log(res);
        this.detail = res.data;
      })
      .catch(() => {});
  },
  computed: {
    ...mapState(["userInfo"]),
    text() {
      return this.isStar ? "已收藏" : "收藏";
    }
  },
  methods: {
    onClickIcon() {
      this.$router.push(`/cart`);
    },
    star() {
      // this.isStar = !this.isStar;
      this.text = "已收藏";
      // 检查用户是否登录  前端vuex保存登录状态
      // 如果后端保存登录状态 koa-session  redis
      if (JSON.stringify(this.userInfo) === "{}") {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/profile");
        }, 1000);
      } else {
        // 插入收藏夹
        axios({
          url: url.addStar,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id
          }
        })
          .then(res => {
            console.log(res);
            this.isStar = !this.isStar;
            if (res.data.code == 200) {
              this.$toast.success(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    onClickButton() {
      if (JSON.stringify(this.userInfo) === "{}") {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/profile");
        }, 1000);
      } else {
        this.$router.push("/orderdetail");
      }
    },
    addCart() {
      // 检查用户是否登录  前端vuex保存登录状态
      // 如果后端保存登录状态 koa-session  redis
      if (JSON.stringify(this.userInfo) === "{}") {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/profile");
        }, 1000);
      } else {
        // 插入购物车
        axios({
          url: url.addCart,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id
          }
        })
          .then(res => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$toast.success(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-container {
  margin-bottom: 1rem;
  background: #f7f8fa;
  &-bg {
    background: #fff;
    margin-top: 46px;
  }
}
.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.detail {
  background: #f7f8fa;
  &-top {
    padding: 0.2rem;
    background: #fff;
    &-img {
      width: 100%;
      height: 5rem;
    }
    &-name {
      color: #333;
      font-weight: bolder;
    }
    &-price {
      color: #ff7300;
      font-size: 0.4rem;
    }
  }
  &-div {
    background: #fff;
    margin-top: 15px;
    padding: 0.2rem;
    &-company,
    &-city,
    &-isbn {
      color: #5b5454;
    }
  }
}
.detail-detailImg {
  margin-top: 10px;
  &-text {
    text-align: center;
    margin-bottom: 10px;
    color: #5b5454;
  }
}
.star {
  color: #ff5000;
}
</style>