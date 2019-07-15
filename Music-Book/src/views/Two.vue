<template>
  <div>
    <div id="div1">
      <h4 class="recommended">推荐歌曲</h4>
      <aplayer id="music" :music="list[0]" :list="list" v-if="isShow" showLrc/>
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
        Axios.get("/data/musicdata.json")
        .then((result)=>{
          result.data.musicData.forEach(obj =>{
              let obj1 ={
                  title:obj.title,
                  artist:obj.author,
                  src:obj.src,
                  pic:obj.musicImgSrc,
                  lrc:`http://localhost:8080/${obj.lrc}`
              }
              this.list.push(obj1);
          });
          this.isShow = true;
        }
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
</style>