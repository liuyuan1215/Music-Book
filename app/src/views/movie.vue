<template>
  <div>
    <ul class="container">
      <li v-for="(obj,index) in movieList" :key="index">
        <img :src="obj.images.small" alt>
        <div class="info">
          <h4>{{obj.title}}</h4>
          <p>
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}</span>
          </p>
          <p>{{obj.collect_count}}已观看</p>
          <p>年份: {{obj.year}}</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: []
    };
  },
  created() {
    this.getMovie();
    window.scroll = () => {
        if(document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight){
            this.getMovie();
        }
    };
  },
  methods: {
    getMovie() {
      // Axios.get("https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?start=0&count=10")
      Axios.get(
        "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=哈尔滨&start="+this.movieList.length+"&count=10"
      )
        .then(result => {
          console.log(result);
          this.movieList = [...this.movieList,...result.data.subjects];
        })
        .catch();
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
</style>