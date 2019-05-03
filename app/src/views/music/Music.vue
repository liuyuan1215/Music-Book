<template>
  <div>
      <img v-for='(obj,index) in music' :key='index' :src="obj.bg" alt="" @click='goList'>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
      return{
          music:[]
      }
  },
  created() {
    Axios.get("")
      .then((result) => {
          this.music = result.data.albums;
      })
      .catch();
  },
  methods:{
      goList(){
          this.$router.push('')
      }
  }
};
</script>

<style scoped>
    img{
        width: 50%;
    }
</style>