<template>
  <div class="category-bg">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              @click="selectCategory(item.typeId, index)"
              :class="{active:active==index}"
              v-for="(item, index) in types"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              class="content"
              @load="onLoad"
              v-model="isLoading"
              :finished="finished"
              finished-text="没有更多了"
            >
              <div
                @click="goDetail(item._id)"
                class="content-item"
                v-for="(item, index) in productList"
                :key="index"
              >
                <img :src="item.fileList1[0].content" alt />
                <p class="content-item-name">{{item.name}}</p>
                <p class="content-item-price">￥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      types: [], // 类型信息
      active: 0,
      productList: [],
      typeId: 1, // 当前选中类型的id
      start: 0,
      limit: 10,
      finished: false, //是否数据取完
      isLoading: false // 上拉加载
    };
  },
  created() {
    axios({
      url: url.getTypes
    })
      .then(res => {
        console.log(res);
        this.types = res.data;
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;

      this.getProductList();
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    },
    goDetail(id) {
      console.log(id);
      /* this.$router.push({
        name: 'detail',
        params: {
          id: id
        }
      }); */

      /* this.$router.push({
        path: '/detail',
        query: {
          id: id
        }
      }); */

      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.category-bg {
  height: 100vh;
  background: #f7f8fa;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.nav {
  background-color: #fff;
  margin-right: 5px;
  li {
    height: 0.6rem;
    line-height: 0.6rem;
    // border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
    // font-size: 0.2rem;
  }
  .active {
    color: #3750b2;
    font-weight: bold;
    background: #f7f8fa;
  }
  .active::after {
    content: "";
    position: absolute;
    height: 0.6rem;
    left: 0;
    border-left: 4px solid #3750b2;
  }
}
.container {
  position: fixed;
  top: 46px;
  bottom: 50px;
  right: 0;
  overflow-y: scroll;
  .van-list__finished-text {
    display: none;
    width: 100%;
  }
}
.content {
  // display: flex;
  // flex-wrap: wrap;
  float: left;
  padding-bottom: 50px;
  &-item {
    display: inline-block;
    width: 45%;
    margin: 0 10px;
    text-align: center;
    background: #ffffff;
    border-radius: 7px;
    margin: 5px;
    img {
      width: 100vw;
      height: 2rem;
      border-radius: 7px 7px 0 0;
    }
    &-name {
      margin: 5px 5px auto 5px;
      text-align: left;
      font-size: 14px !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-price {
      margin-left: 5px;
      color: #3750b2;
      float: left;
      font-weight: bold !important;
    }
  }
}
// @media screen and (max-width: 840px) {
//   .content {
//     &-item {
//       width: 45%;
//     }
//   }
// }
</style>

