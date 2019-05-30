<template>
  <div>
    {{$route.params.id}}
    {{book[0].title}}
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
    Axios.get("http://localhost:8080/data/bookdetail.json/")
      .then((result) => {
        // this.book = {...result.data.subjects};
        // console.log(this.book);
        this.book = result.data.subjects;
        console.log(this.book);
      })
      .catch(() => {});
  }
};
</script>

<style>
</style>