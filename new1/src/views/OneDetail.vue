<template>
  <div>
    ISBN: {{$route.params.id}}
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      book: {}
    };
  },
  created() {
    Axios.get("https://bird.ioliu.cn/v1?url=http://localhost:8080/data/bookdetail.json/"+this.$route.params.id)
      .then((result) => {
        // this.book = {...result.data.subjects};
        // console.log(this.book);
        this.book = result.data;
        console.log(this.book);
        console.log(result);
      })
      .catch(() => {});
  }
};
</script>

<style>
div{
  text-align: center;
}
</style>