<template>
  <div>
    <van-nav-bar class="top-nav" title="搜索" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <form class="search-top" action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="card">
      <van-card
        v-for="(item, index) in resultList"
        :key="index"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
        @click="goDetail(item._id)"
      ></van-card>
      <div class="card-toast" v-if="isShowTip">没有搜索到匹配结果</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      value: "",
      productList: [],
      resultList: [],
      isShowTip: false,
      start: 0,
      limit: 99
    };
  },
  methods: {
    onSearch() {
      this.isShowTip = false;
      if (this.value == "") {
        //如果没有输入内容，不让往下执行
        // this.$message.warning("请输入搜索内容");
        Toast("请输入您要搜索的内容");
        return;
      }
      axios({
        url: url.getProductList,
        method: "get",
        params: {
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          console.log(res);
          this.productList = res.data;
        })
        .then(() => {
          this.resultList = [];
          this.productList.forEach(item => {
            if (
              item.name.indexOf(this.value) > -1 ||
              item.city.indexOf(this.value) > -1
            ) {
              this.resultList.push(item);
            }
          });
          if (this.resultList.length == 0) {
            this.isShowTip = true;
          }
          this.resultList.map(item => {
            item.name = this.brightKeyword(item.name);
            item.price = this.brightKeyword(item.price);
            item.city = this.brightKeyword(item.city);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    brightKeyword(val) {
      let value = this.value;
      if (val.indexOf(value) !== -1) {
        return val.replace(value, `${value}`);
      } else {
        return val;
      }
    },
    goDetail(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`);
    },
    onCancel() {
      // Toast("取消");
      this.resultList = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
}
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.search-top {
  position: fixed;
  top: 46px;
  width: 100%;
  z-index: 999;
}
.card {
  margin-top: 100px;
  &-toast {
    width: 100%;
    text-align: center;
  }
}
.van-card__title .van-multi-ellipsis--l2 {
  color: #000;
}
.van-card__price {
  color: #ee0a24;
}
</style>