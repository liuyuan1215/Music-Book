<template>
  <div>
    <!-- <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
    </swipe>-->
    <slide :imgs='imgs'></slide>
  </div>
</template>

<script>
// require("vue-swipe/dist/vue-swipe.css");
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
import Slide from "@/components/Slide.vue";
export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/view/subject/l/public/s24476315.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s29895502.jpg",
        "https://img3.doubanio.com/view/subject/l/public/s28543782.jpg",
        "https://img1.doubanio.com/view/subject/l/public/s29543659.jpg"
      ]
    };
  },
  components: {
    Swipe,
    SwipeItem,
    Slide
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>