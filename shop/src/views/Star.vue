<template>
  <div class="cart-container">
    <div class="last-star">
      <van-icon size="25" color="#484848" name="arrow-left" @click="goLast" />
    </div>
    <div class="top-nav" :num="num">收藏夹（{{num}}）</div>
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
          <van-button size="mini" @click="delStar(item._id, index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <div class="submit-bar" @click="onSubmit">
      <van-icon size="25" name="delete" />
    </div>
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
        url: url.getStar,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
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
      axios({
        url: url.delAllStar,
        method: "post",
        data: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          console.log(res);
          this.pruductList = [];
          this.$toast.success("已全部清空");
        })
        .catch(err => {
          console.log(err);
        });
    },
    delStar(id, index) {
      axios({
        url: url.delStar,
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
    },
    goLast() {
      this.$router.go(-1);
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
  border-bottom: 1px solid #eee;
}
.cart-container {
  background: #f7f8fa;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.submit-bar {
  position: fixed;
  top: 8px;
  right: 4px;
  z-index: 1000;
}
.card {
  margin-top: 47px;
  margin-bottom: 1rem;
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
.last-star {
  position: fixed;
  top: 8px;
  z-index: 1000;
}
</style>

