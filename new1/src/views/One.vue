<template>
  <div>
    <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
      <swipe-item class="slide4"></swipe-item>
    </swipe>
    <ul class="book">
      <li class='li-book' v-for="(obj,index) in bookList" :key="index" @click="goDetail(obj.id)">
        <div id='img'>
          <img :src="obj.images.small" alt>
        </div>        
        <div class="info">
          <!-- <h4>{{obj.title}}</h4> -->
          <p>{{obj.title}}</p>
          <p>作者：{{obj.author}}</p>
          <!-- <p>出版社：{{obj.publishing_house}}</p> -->
          <!-- <p>年份：{{obj.year}}</p> -->
          <!-- <p>页数：{{obj.pages}}页</p> -->
          <!-- <p>评分：{{obj.average}}分</p> -->
          <!-- <p>{{obj.collect_count}}已评价</p> -->
          <!-- <p>ISBN：{{obj.id}}</p> -->
        </div>
      </li>
    </ul>
    <div v-show="isBottom">已经到底了</div>
  </div>
</template>

<script>
import Axios from "axios";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  data() {
    return {
      bookList: [],
      isBottom: false
    };
  },
  created() {
    this.getBook();
    // window.onscroll = () => {
    //   if (document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight && !this.isBottom) {
    //     this.getBook();
    //   }
    // };
  },
  methods: {
    getBook() {
      Axios.get("/data/book.json")
        .then(result => {
          console.log(result);
          this.bookList = [...this.bookList, ...result.data.subjects];
          if (this.bookList.length == result.data.total) {
            this.isBottom = true;
          }
        })
        .catch();
    },
    goDetail(id) {
      this.$router.push("/onedetail/" + id);
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style>
.my-swipe {
  height: 2.65rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  z-index: -1;
}
.slide1 {
  background: url(../components/img/lun1.png) no-repeat;
  background-size: 100%;
}
.slide2 {
  background: url(../components/img/lun2.png) no-repeat;
  background-size: 100%;
}
.slide3 {
  background: url(../components/img/lun3.png) no-repeat;
  background-size: 100%;
}
.slide4 {
  background: url(../components/img/lun4.png) no-repeat;
  background-size: 100%;
}
/* .book {
    padding: 0.2rem;
  }
  li {
    display: flex;
    border-bottom: 1px solid #a9a9a9;
  }
  li img {
    margin: auto;
    width: 90px;
    height: 123px;
  }
  .info {
    flex-grow: 1;
    margin-left: 0.2rem;
  } */

.book {
  text-align: center;
  background: #f8f8f8;
}
.li-book {
  width: 44%;
  display: inline-block;
  margin: 0.1rem;
  border-radius: 4px;
  background: #fff;
}
.li-book #img{
  width: 2.5rem;
  height: 3.2rem;
  margin-left: auto;
  margin-right: auto;
}
.li-book #img img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
}
.li-book p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>