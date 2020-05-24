<template>
  <div class="container">
    <!-- 头部 -->
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" @click="search" slot="left"></van-icon>
      <van-icon
        @click="$router.push('/profile')"
        slot="right"
      >{{JSON.stringify(userInfo) === '{}' ? '未登录' : userInfo.userName}}</van-icon>
    </van-nav-bar>

    <van-notice-bar
      class="van-notice-bar"
      color="#1989fa"
      background="#ecf9ff"
      text="通知内容通知内容通知内容"
      left-icon="volume-o"
    />

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">
        <van-icon name="fire" />热门商品
      </p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-swiper-content" @click="goDetail(item._id)">
            <img :src="item.fileList1[0].content" alt />
            <div class="hot-swiper-content-name">{{ item.name }}</div>
            <div class="hot-swiper-content-price">￥{{ item.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 推荐商品 -->
    <div class="variety">
      <p class="variety-title">
        <van-icon name="like" />推荐商品
      </p>
      <ul>
        <li
          class="variety-item"
          @click="goDetail(item._id)"
          v-for="(item,index) in varietyItem"
          :key="index"
        >
          <img :src="item.fileList1[0].content" alt />
          <p class="variety-item-name">{{ item.name }}</p>
          <p class="variety-item-price">￥{{ item.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      hotProducts: [],
      varietyItem: [],
      start1: 0,
      limit: 20,
      start2: 23,
      carouselItem: [
        // 轮播图
        {
          name: "img1",
          imgSrc: "http://img60.ddimg.cn/2020/2/27/2020022717070815512.jpg"
        },
        {
          name: "img2",
          imgSrc: "http://img61.ddimg.cn/2020/2/27/2020022716560470563.jpg"
        },
        {
          name: "img3",
          imgSrc: "http://img63.ddimg.cn/2020/2/27/2020022717062099358.jpg"
        },
        {
          name: "img4",
          imgSrc: "http://img62.ddimg.cn/2020/2/27/2020022716595189414.jpg"
        },
        {
          name: "img5",
          imgSrc: "http://img62.ddimg.cn/2020/2/26/2020022617140263714.jpg"
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    // let url1 = 'http://www.liuliu.com/getList';
    // let url2 = 'http://www.liuliu.com/getUser';
    // let url3 = 'http://www.liuliu.com/regexp';
    // let url4 = 'http://www.liuliu.com/list';
    // let url5 = url.getVarietyItem;
    // axios.get(url5).then(res => {
    //   // console.log(res);
    //   this.varietyItem = res.data;
    // });
    // axios.get(url5).then(res => {
    //   this.hotProducts = res.data;
    // });
    //请求推荐商品数据
    axios({
      url: url.getProductList2,
      method: "get",
      params: {
        // start2: this.varietyItem.length,
        start2: this.start2,
        limit: this.limit
      }
    })
      .then(res => {
        console.log(res);
        this.varietyItem = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    //请求热门商品数据
    axios({
      url: url.getProductList1,
      method: "get",
      params: {
        start1: this.hotProducts.length,
        limit: this.limit
      }
    })
      .then(res => {
        console.log(res);
        this.hotProducts = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
    search() {
      this.$router.push(`/search`);
    }
  }
};
</script>

<style lang="scss">
.van-nav-bar__title {
  color: #3750b2;
  font-weight: bolder;
}
.container {
  // background-color: #eee;
  background: #f7f8fa;
}
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.van-notice-bar {
  margin-top: 46px;
  height: 30px;
}
// 轮播图
.carousel {
  margin: 10px 10px 0.2rem 10px;
  height: 3rem;
  .van-swipe {
    border-radius: 10px;
  }
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
// 热门商品
.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  border-radius: 7px;
  &-title {
    color: #3750b2;
    font-weight: 800;
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    margin: auto 10px;
    &-content {
      border-radius: 7px;
      width: 1.9rem;
      text-align: center;
      &-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-price {
        margin-left: 5px;
        color: #3750b2;
        float: left;
        font-weight: 500 !important;
      }
      img {
        border-radius: 5px;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
// 推荐商品
.variety {
  margin-top: 0.2rem;
  // background: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
  &-title {
    color: #3750b2;
    font-weight: 800;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    background: #ffffff;
    flex-basis: 45%;
    border-radius: 7px;
    margin: 5px;
    &-name {
      margin: 10px 10px auto 10px;
      text-align: left;
      font-size: 14px !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-price {
      margin-left: 10px;
      color: #3750b2;
      float: left;
      font-weight: 600 !important;
    }
  }
  img {
    // width: 2rem;
    height: 2.5rem;
    width: 100%;
    border-radius: 7px 7px 0 0;
  }
}
</style>
