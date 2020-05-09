<template>
  <div class="booklist">
    <div class="booklist-num">商品总数：{{products.length}}</div>
    <div class="booklist-top">
      <div class="booklist-top-one">商品编号</div>
      <div class="booklist-top-two">商品名称</div>
      <div class="booklist-top-three">主图</div>
      <div class="booklist-top-four">价格</div>
      <div class="booklist-top-five">出版社</div>
      <div class="booklist-top-six">发货地</div>
      <div class="booklist-top-seven">ISBN编号</div>
      <div class="booklist-top-eight">详情图</div>
      <div class="booklist-top-nine">书籍类别</div>
      <div class="booklist-top-ten">操作</div>
    </div>
    <div v-for="(item, index) in products" :key="index" class="booklist-products">
      <div class="booklist-products-one">{{index+1}}</div>
      <div class="booklist-products-two">{{item.name}}</div>
      <div class="booklist-products-three">
        <img :src="item.img" alt />
      </div>
      <div class="booklist-products-four">{{item.price}}</div>
      <div class="booklist-products-five">{{item.company}}</div>
      <div class="booklist-products-six">{{item.city}}</div>
      <div class="booklist-products-seven">{{item.idnum}}</div>
      <div class="booklist-products-eight">
        <img :src="item.detailImg" alt />
      </div>
      <div class="booklist-products-nine">{{item.type}}</div>
      <div class="booklist-products-ten" @click="delProduct(item._id,index)">下架</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      products: []
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
      url: url.getProductLists,
      method: "get",
      params: {}
    })
      .then(res => {
        console.log(res);
        this.products = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // }
  },
  methods: {
    delProduct(id, index) {
      axios({
        url: url.delProduct,
        method: "post",
        data: {
          orderId: this._id
        }
      })
        .then(res => {
          this.products.splice(index, 1);
          if (res.data.code == 200) {
            Toast.success("删除成功");
          } else {
            Toast.fail("删除失败");
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
.booklist {
  &-num {
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid #6375eb;
    display: block;
  }
  &-top {
    display: flex;
    margin: 10px;
    text-align: center;
    font-size: 18px;
    &-one {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-two {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-three {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-four {
      flex: 2;
      border-right: 1px solid #fff;
    }
    &-five {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-six {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-seven {
      flex: 4;
      border-right: 1px solid #fff;
    }
    &-eight {
      flex: 4;
      border-right: 1px solid #fff;
    }
    &-nine {
      flex: 3;
      border-right: 1px solid #fff;
    }
    &-ten {
      flex: 2;
      margin: auto 5px;
    }
  }
  &-products {
    display: flex;
    margin: 10px;
    text-align: center;
    max-height: 100px;
    &-one {
      flex: 3;
      line-height: 100px;
      border-right: 1px solid #ccc;
    }
    &-two {
      flex: 3;
      line-height: 100px;
      border-right: 1px solid #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 2px;
    }
    &-three {
      flex: 3;
      border-right: 1px solid #ccc;
      overflow: hidden;
    }
    &-four {
      flex: 2;
      line-height: 100px;
      border-right: 1px solid #ccc;
    }
    &-five {
      flex: 3;
      line-height: 100px;
      border-right: 1px solid #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-six {
      flex: 3;
      line-height: 100px;
      border-right: 1px solid #ccc;
    }
    &-seven {
      flex: 4;
      line-height: 100px;
      border-right: 1px solid #ccc;
    }
    &-eight {
      flex: 4;
      border-right: 1px solid #ccc;
      overflow: hidden;
    }
    &-nine {
      flex: 3;
      line-height: 100px;
      border-right: 1px solid #ccc;
    }
    &-ten {
      flex: 2;
      line-height: 100px;
      margin: auto 5px;
      color: #6375eb;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>