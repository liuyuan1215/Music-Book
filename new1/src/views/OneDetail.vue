<template>
  <div>
    1
    <br>1
    <br>1
    <br>
    1
    {{book.title}}
    <img v-if="isShow" :src="book.images.small">
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movie: {},
      isShow: false
    };
  },
  created() {
    Axios.get("/data/book.json"+this.$route.params.id)
      .then((result) => {
        this.book = result.data;
        this.isShow = true;
      })
      .catch(() => {});
  }
};
</script>

<style>
</style>