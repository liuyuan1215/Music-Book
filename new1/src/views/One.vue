<template>
  <div>
      <swipe class="my-swipe">
      <swipe-item class="slide1"></swipe-item>
      <swipe-item class="slide2"></swipe-item>
      <swipe-item class="slide3"></swipe-item>
      <swipe-item class="slide4"></swipe-item>
    </swipe>
  </div>
</template>

<script>
    import "vue-swipe/dist/vue-swipe.css";
    import { Swipe, SwipeItem } from "vue-swipe";
export default {
    components: {
    Swipe,
    SwipeItem,
  }
};
</script>

<style>
.my-swipe {
  height: 2.65rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
    background: url(../components/img/lun1.png) no-repeat;
    background-size: 100%;
}
.slide2 {
    background: url(../components/img/lun2.png) no-repeat;
    background-size: 100%;
}
.slide3 {
    background: url(../components/img/lun3.png) no-repeat;
    background-size: 100%;
}
.slide4 {
    background: url(../components/img/lun4.png) no-repeat;
    background-size: 100%;
}
</style>