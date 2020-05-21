<template>
  <div class="order">
    <div class="order-num">订单总量：{{orders.length}}</div>
    <div class="order-userlisttop">
      <div class="order-userlisttop-one">订单编号</div>
      <div class="order-userlisttop-two">订单状态</div>
      <div class="order-userlisttop-three">生成订单时间</div>
      <div class="order-userlisttop-four">ISBN编号</div>
      <div class="order-userlisttop-five">总价</div>
      <div class="order-userlisttop-six">支付方式</div>
      <div class="order-userlisttop-seven">收货地址</div>
      <div class="order-userlisttop-eight">操作</div>
    </div>
    <div v-for="(item, index) in orders" :key="index" class="order-userlist">
      <div class="order-userlist-one">{{index+1}}</div>
      <div class="order-userlist-two">{{item.statu}}</div>
      <div class="order-userlist-three">{{formatTime(item.createDate)}}</div>
      <div class="order-userlist-four" style="position:relative;">
        <div
          class="order-userlist-four-a"
          style="position:relative;left: 50%;top: 50%;transform: translate(-50%,-50%);"
        >
          <div
            class="order-userlist-four-a-goods"
            v-for="(itemProductList, j) in orders[index].productList"
            :key="j"
          >{{itemProductList.idnum}}</div>
        </div>
      </div>

      <div class="order-userlist-five">{{item.totalPrice}}</div>
      <div class="order-userlist-six">{{item.message}}</div>
      <div
        class="order-userlist-seven"
        style="position:relative;"
        v-for="(itemList, i) in orders[index].list"
        :key="i"
      >
        <div style="position:relative;left: 50%;top: 50%;transform: translate(-50%,-50%);">
          <p class="order-userlist-seven-text-one">{{" "+itemList.name+" "+itemList.tel}}</p>
          <p class="order-userlist-seven-text-two">{{itemList.value+" "+itemList.address}}</p>
        </div>
      </div>
      <div class="order-userlist-eight" @click="updateStatu(item._id)">处理</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
import { Toast } from "vant";
import Moment from "moment";
export default {
  data() {
    return {
      orders: []
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
      url: url.getSuccessOrders,
      method: "get",
      params: {}
    })
      .then(res => {
        console.log(res);
        this.orders = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // }
  },
  methods: {
    formatTime(value) {
      return Moment(value).format("YYYY-MM-DD HH:mm:ss");
    },
    getSuccessOrderList() {
      axios({
        url: url.getSuccessOrders,
        method: "get",
        params: {}
      })
        .then(res => {
          console.log(res);
          this.orders = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateStatu(id) {
      axios({
        url: url.updateStatu,
        method: "post",
        data: {
          orderId: id
        }
      })
        .then(res => {
          console.log(res);
          console.log(id);
          if (res.data.code == 200) {
            this.getSuccessOrderList();
            Toast.success("处理成功");
          } else {
            Toast.fail("处理失败");
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
.order {
  position: fixed;
  left: 13vw;
  width: 81vw;
  margin: 5vh 3vw;
  height: 80vh;
  overflow-y: scroll;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  &-num {
    font-size: 18px;
    padding: 15px;
    border-bottom: 1px solid #6375eb;
    display: block;
  }
  &-userlisttop {
    display: flex;
    margin: 10px;
    text-align: center;
    font-size: 18px;
    &-one {
      flex: 2;
      border-right: 1px solid #fff;
    }
    &-two {
      flex: 2;
      border-right: 1px solid #fff;
    }
    &-three {
      flex: 4;
      border-right: 1px solid #fff;
    }
    &-four {
      flex: 4;
      border-right: 1px solid #fff;
      position: relative;
      &-a {
        overflow: scroll;
      }
    }
    &-five {
      flex: 2;
      border-right: 1px solid #fff;
    }
    &-six {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-seven {
      flex: 5;
      border-right: 1px solid #fff;
      padding-right: 3px;
      padding-left: 3px;
    }
    &-eight {
      flex: 2;
      margin: auto 13px;
    }
  }
  &-userlist {
    display: flex;
    margin: 10px;
    text-align: center;
    max-height: 90px;
    overflow-y: scroll;
    &-one {
      flex: 2;
      line-height: 90px;
      border-right: 1px solid #ccc;
    }
    &-two {
      flex: 2;
      line-height: 90px;
      border-right: 1px solid #ccc;
    }
    &-three {
      flex: 4;
      line-height: 90px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-right: 1px solid #ccc;
    }
    &-four {
      flex: 4;
      border-right: 1px solid #ccc;
    }
    &-five {
      flex: 2;
      line-height: 90px;
      border-right: 1px solid #ccc;
    }
    &-six {
      flex: 3;
      line-height: 90px;
      border-right: 1px solid #ccc;
    }
    &-seven {
      flex: 5;
      border-right: 1px solid #ccc;
      padding-right: 3px;
      padding-left: 3px;
    }
    &-eight {
      flex: 2;
      line-height: 90px;
      margin: auto 5px;
      color: #6375eb;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>