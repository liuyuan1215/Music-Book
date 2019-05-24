<template>
  <div>
    <h4>未完待续···</h4>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      book: {},
      isShow: false
    };
  },
  // created() {
  //   Axios.get("/data/bookdetail.json/"+this.$route.params.id)
  //     .then((result) => {
  //       this.book = result.data;
  //       this.isShow = true;
  //     })
  //     .catch(() => {});
  // }
};
</script>

<style>
h4{
  color:#204060;
}
</style>