<template>
  <div>
    <div id="div1">
      <h4 class="recommended">推荐歌曲</h4>
      <aplayer id="music" :music="list[0]" :list="list" v-if="isShow" showLrc/>
    </div>
    <div id="div2">
      <h4 class="recommended">搜索更多</h4>
      <div id="div3">
        <input id="search" type="text" placeholder="大家都在搜 好妹妹乐队" ref="input1">
        <button type="button" id="btn" @click.prevent="searchMusic()">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      list: [],
      isShow: false
    };
  },
  components: {
    Aplayer
  },
  computed: {
    music() {
      return this.list[0];
    }
  },
  methods: {
    searchMusic(write) {
      this.write = this.$refs.input1.value;
      console.log(this.write);
    },
    getMusic() {
      Axios.all([
        Axios.get("/data/musicdata.json"),
        Axios.get(
          "https://bird.ioliu.cn/v1?url=http://www.coupleworldlove.online:3000/search?keywords=`'${this.write}'`"
        )
      ]).then(
        Axios.spread((result, search) => {
          console.log("1", result.data);
          console.log("2", search.data);
          result.data.musicData.forEach(obj => {
            let obj1 = {
              title: obj.title,
              artist: obj.author,
              src: obj.src,
              pic: obj.musicImgSrc,
              lrc: `http://localhost:8080/${obj.lrc}`
            };
            this.list.push(obj1);
          });
          this.isShow = true;
        })
      );
    }
  },
  created() {
    this.getMusic();
  }
};
</script>

<style>
.recommended {
  text-align: center;
  color: #1c8a92;
  font-weight: bolder;
}
#div3 {
  height: 30px;
  width: 100%;
  display: flex;
}
#search {
  outline: none;
  text-indent: 5px;
  flex: 1;
}
#btn {
  outline: none;
  width: 1rem;
}
</style>