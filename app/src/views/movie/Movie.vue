<template>
  <div>
    <ul class="container">
      <li v-for="(obj,index) in movieList" :key="index" @click='goDetail(obj.id)'>
        <img :src="obj.images.small" alt>
        <div class="info">
          <h4>{{obj.title}}</h4>
          <p>
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}/</span>
          </p>
          <p>{{obj.collect_count}}已观看</p>
          <p>年份: {{obj.year}}</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}/</span>
          </p>
        </div>
      </li>
    </ul>
    <img class="loading" v-show="isShow" src="@/assets/imgs/loading.gif" alt>
    <div v-show="isBottom">已经到底了</div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: false,
      isBottom:false
    };
  },
  created() {
    this.getMovie();
    window.scroll = () => {
      console.log(document.documentElement.scrollTop,document.documentElement.clientHeigh,document.documentElement.scrollHeight);
      if (document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight && !this.isBottom) {
        this.getMovie();
      }
    };
  },
  methods: {
    getMovie() {
      this.isShow = true;
      // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start=0&count=10")
      Axios.get(
        //"https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=哈尔滨&start="+this.movieList.length+"&count=10"
        "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start="+this.movieList.length+"&count=10"
        //'/data/movie0.json'
      )
        .then((result) => {
          // console.log(result);
          this.movieList = [...this.movieList, ...result.data.subjects];
          this.isShow = false;
          if(this.movieList.length == result.data.total){
            this.isBottom = true;
          }
        })
        .catch();
    },
    goDetail(id){
      this.$router.push('/moviedetail/'+id);
    }
  }
};
</script>

<style scoped>
  .container {
    padding: 0.2rem;
  }
  li {
    display: flex;
    border-bottom: 1px solid #000;
  }
  li img {
    margin: auto;
    width: 90px;
    height: 123px;
  }
  .info {
    flex-grow: 1;
    margin-left: 0.2rem;
  }
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.5rem;
    height: 0.5rem;
  }
</style>